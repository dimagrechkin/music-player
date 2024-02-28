<template>
  <div class="top-navigation">
    <desktop-top-navigation />
    <search-field
      ref="searchFieldRef"
      :search1="mockedData.searchfiledProps.search1"
      :search2="mockedData.searchfiledProps.search"
    />
    <top-left-navigation
      :bell-fill="mockedData.topLeftNavigationProps.bellFill"
      :profile-name="profileQuery?.result?.value?.defaultProfile?.handle"
      :arrow-ios-down="mockedData.topLeftNavigationProps.arrowIosDown"
    />
    <div
      v-if="searchFieldRef?.searchInputRef?.isFocused && searchFieldRef?.searchResult?.search?.items.length !== 0"
      class="search-content"
    >
      <p
        v-for="profile in searchFieldRef?.searchResult?.search?.items"
        :key="profile.id"
      >
        {{ profile.handle }}
        <button @click="followProfile(profile.id)">
          follow
        </button>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { ethers } from 'ethers';

import DesktopTopNavigation from '@/components/DesktopTopNavigation.vue';
import SearchField from '@/components/SearchField.vue';
import TopLeftNavigation from '@/components/TopLeftNavigation.vue';

import { useCreateFollowTypedDataMutation, useChallengeQuery, useDefaultProfileQuery, useAuthenticateMutation, 
  useBroadcastMutation } from '@/graphql/generated';
import { signedTypeData, splitSignature } from '@/utils/helpers';

import { useCryptoStore } from '@/stores/crypto';
import { mockedData } from '@/mocks';

const cryptoStore = useCryptoStore();
const { account } = storeToRefs(cryptoStore);
let signTextSignature = ref<string>();


const profileQuery = useDefaultProfileQuery(
  () => ({
    request: {
      ethereumAddress: account.value,
    },
  }),
  () => ({
    enabled: !!account.value,
  })
);


const getSigner = () => {
  return new ethers.Wallet(String(import.meta.env.VITE_PK) as string);
};

const signText = (text: string) => {
  return getSigner().signMessage(text);
};

const { mutate: sendSignedMessage } = useAuthenticateMutation();

const { setAccessToken } = useCryptoStore();

const { result: challengeResult } = useChallengeQuery(
  () => ({
    request: {
      address: account.value,
    },
  }),
  {
    enabled: !!account.value,
  }
);

// const loginAccount = async () => {
//   await signText(challengeResult?.value?.challenge.text ?? '');
//   signTextSignature.value = await signText(challengeResult?.value?.challenge.text ?? '');

//   const { data } = await sendSignedMessage({
//     request: {
//       address: account.value,
//       signature: signTextSignature.value,
//     },
//   });

//   const { accessToken, refreshToken } = data.authenticate;

//   setAccessToken(accessToken, refreshToken);
// };

const searchFieldRef = ref<InstanceType<typeof SearchField>>();
const { mutate: requestTypeData } = useCreateFollowTypedDataMutation();
const { mutate: broadcast } = useBroadcastMutation();

const typedData = ref();
const signature = ref();

const followProfile = async (id: number) => {
  // await loginAccount();
  typedData.value = await requestTypeData({
    request: {
      follow: [
        {
          profile: id,
        },
      ],
    },
  });
  const { domain, types, value } = typedData?.value?.data?.createFollowTypedData?.typedData ?? undefined;

  signature.value = await signedTypeData(domain, types, value);
const { v, r, s } = splitSignature(signature.value);
console.log(  v, r, s , "value" );
// const data = typedData?.value?.unwrap();
console.log(typedData?.value?.data?.createFollowTypedData.id, 'typedData?.value?.data?.id');

const broadcastResult = await broadcast({
  request:{
      id: typedData?.value?.data?.createFollowTypedData.id,
      signature: signature.value,
  }
 
});
console.log(broadcastResult, 'broadcastResult');

// await lensHub.followWithSig({
//   follower: account?.value,
//   profileIds: value?.profileIds,
//   data: value?.datas,
//   sig: {
//     v,
//     r,
//     s,
//     deadline: value?.deadline,
//   },
// });
};
</script>

<style scoped>
.top-navigation {
  align-items: center;
  background-color: #00000019;
  display: flex;
  gap: 8px;
  height: 64px;
  min-width: 889px;
  padding: 0 24px;
  position: relative;
}

.search-content {
  display: block;
  position: absolute;
  flex-direction: column;
  margin-top: 80px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
</style>
