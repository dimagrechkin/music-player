<template>
  <div class="white-text" v-if="isLoadingProfile">Loading Profile ...</div>
  <div class="profile-container">
    <div class="profile-content-container">
      <img
        v-if="!!profilesData?.profile?.coverPicture?.original.url"
        :src="imgConverter(profilesData?.profile?.coverPicture?.original?.url || '')"
        :alt="profilesData?.profile?.name || profilesData?.profile?.handle || ''"
        class="cover-image-container"
      />

      <img
        v-if="!!profilesData?.profile?.picture?.original.url"
        :src="imgConverter(profilesData?.profile?.picture?.original.url || '')"
        :alt="profilesData?.profile?.name || profilesData?.profile?.handle || ''"
        class="profile-picture-container"
      />

      <h1 class="white-text profile-name">{{ profilesData?.profile?.name || 'Unknown User' }}</h1>
      <p class="white-text profile-handle">{{ profilesData?.profile?.handle || 'unknownuser' }}</p>
      <p class="white-text profile-description">{{ profilesData?.profile?.bio || 'unknownuser' }}</p>
      <p class="white-text follower-count">{{ profilesData?.profile?.stats.totalFollowers }}{{ ' Followers' }}</p>
    </div>
  </div>
  <button class="white-text">213</button>
  <div class="publications-container">
    <div class="white-text" v-if="isLoadingPublications">Loading publications ...</div>
    <card-profile
      v-for="publication in publicationsData?.publications.items"
      :publication="publication"
      :key="publication.id"
    />
  </div>
  <div class="white-text" v-if="profileError || publicationsError">Couldn't find this profile</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ethers } from 'ethers';

import CardProfile from './CardProfile.vue';
import { imgConverter } from '@/utils/helpers';
import { useAuthenticateMutation, useChallengeQuery, useProfileQuery, usePublicationsQuery } from '@/graphql/generated';
import { storeToRefs } from 'pinia';

import { useCreateFollowTypedDataMutation } from '@/graphql/generated';
import { signedTypeData, splitSignature } from '@/utils/helpers';
import { lensHub } from '../utils/lens-hub';
import { useCryptoStore } from '@/stores/crypto';
import { ref } from 'vue';

const route = useRoute();

const {
  loading: isLoadingProfile,
  result: profilesData,
  error: profileError,
  onResult,
} = useProfileQuery({
  request: {
    handle: route.params.profileId,
  },
});

//// Login logic here

const cryptoStore = useCryptoStore();
const { account } = storeToRefs(cryptoStore);

let signTextSignature = ref<string>();

const { result: challengeREsult } = useChallengeQuery(
  () => ({
    request: {
      address: account.value,
    },
  }),
  {
    enabled: !!account.value,
  }
);

const privateKey = '0x4f06b87ea72ed5bcd24812bdb0c54397cd4b66aab8f62975408e6d526bf7461c'; //TODO move key to env

const getSigner = () => {
  return new ethers.Wallet(privateKey);
};

const signText = (text: string) => {
  return getSigner().signMessage(text);
};

const { mutate: sendSignedMessage } = useAuthenticateMutation();

const { setAccountAddress, setAccessToken } = useCryptoStore();

const loginAccount = async () => {
  await signText(challengeREsult?.value?.challenge.text);
  signTextSignature.value = await signText(challengeREsult?.value?.challenge.text);

  const { data } = await sendSignedMessage({
    request: {
      address: account.value,
      signature: signTextSignature.value,
    },
  });

  const { accessToken, refreshToken } = data.authenticate;

  setAccessToken(accessToken, refreshToken);
  console.log(accessToken, 'accessToken');
};
const { mutate: requestTypeData } = useCreateFollowTypedDataMutation();

const typedData = ref();
const signature = ref();

onResult(async () => {
  await loginAccount();
  console.log(profilesData.value?.profile, 'fsdfsdf');

  typedData.value = await requestTypeData({
    request: {
      follow: [
        {
          profile: profilesData.value?.profile?.id,
        },
      ],
    },
  });
  const { domain, types, value } = await typedData?.value?.data?.createFollowTypedData?.typedData;

  signature.value = await signedTypeData(domain, types, value);
  const { v, r, s } = splitSignature(signature.value);
  console.log(
    {
      follower: account.value,
      profileIds: value.profileIds,
      data: value.datas,
      sig: {
        v,
        r,
        s,
        deadline: value.deadline,
      },
    },
    '  console.log(v, r, s);'
  );
  if (value.profileIds && value?.datas && account.value && v && r && s) {
    console.log(value.profileIds[0], value?.datas[0], account.value, v.toString(), r, s, 'account.value');
    console.log(lensHub, 'lensHub');
    const decimalPrecision = 11;
    const tes = String(value.profileIds[0]) + '0'.repeat(decimalPrecision);
    console.log(tes, 'tes');

    await lensHub.followWithSig({
      follower: account.value,
      profileIds: value.profileIds,
      data: value.datas,
      sig: {
        v,
        r,
        s,
        deadline: value?.deadline,
      },
    });
  }
});

const {
  loading: isLoadingPublications,
  result: publicationsData,
  error: publicationsError,
} = usePublicationsQuery(
  () => ({
    request: {
      profileId: profilesData.value?.profile?.id,
    },
  }),
  {
    enabled: profilesData.value?.profile?.id,
  }
);
</script>

<style>
.white-text {
  color: white;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
}

.profile-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
}

.cover-image-container {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
}

.profile-picture-container {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-handle {
  font-size: 1.5rem;
  opacity: 0.7;
}

.follower-count {
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>
