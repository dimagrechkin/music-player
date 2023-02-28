<template>
  <div class="container">
    <div class="form-container">
      <div class="input-container"><input ref="file" @change="handleFileUpload()" type="file" /></div>
      <div class="input-container"><input v-model="text" type="text" placeholder="Title" /></div>
      <div class="input-container"><textarea v-model="description" placeholder="Description"></textarea></div>
      <div class="input-container"><textarea v-model="content" placeholder="Content"></textarea></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { ethers } from 'ethers';

import {
  useCreatePostTypedDataMutation,
  useAuthenticateMutation,
  useDefaultProfileQuery,
  useChallengeQuery,
} from '@/graphql/generated';
import { PublicationMainFocus } from '@/interfaces/publication';
import { useCryptoStore } from '@/stores/crypto';
import { signedTypeData } from '@/utils/helpers';
import { Metadata } from '@/interfaces/publication';
import { splitSignature } from '@ethersproject/bytes';

import { uploadIpfs } from '../ipfs';
import { lensHub } from '@/utils/lens-hub';

const file = ref(null);
const text = ref('');
const description = ref('');
const content = ref('');
const cryptoStore = useCryptoStore();
const { account } = storeToRefs(cryptoStore);

const handleFileUpload = async () => {
  console.log('selected file', file?.value?.files, text.value, description.value);
};

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

const { mutate: requestTypedData } = useCreatePostTypedDataMutation();

const { result, onResult } = useDefaultProfileQuery(
  {
    request: {
      ethereumAddress: account.value,
    },
  },
  {
    enabled: !!account.value,
  }
);

onResult(async () => {
  await loginAccount();
  const ipfsResult = await uploadIpfs<Metadata>({
    version: '2.0.0',
    mainContentFocus: PublicationMainFocus.TEXT_ONLY,
    metadata_id: uuidv4(),
    description: description.value,
    locale: 'en-US',
    content: content.value,
    external_url: null,
    image: null,
    imageMimeType: null,
    name: text.value,
    attributes: [],
    tags: [],
  });

  const typedData = await requestTypedData({
    request: {
      collectModule: {
        freeCollectModule: {
          followerOnly: false,
        },
      },
      contentURI: `ipfs://${ipfsResult.path}`,
      profileId: result.value?.defaultProfile?.id,
      referenceModule: {
        followerOnlyReferenceModule: false,
      },
    },
  });

  const { domain, types, value } = typedData?.data?.createPostTypedData.typedData;

  const signature = await signedTypeData(domain, types, value);

  const { v, r, s } = splitSignature(signature);

  const tx = await lensHub.postWithSig({
    profileId: value.profileId,
    contentURI: value.contentURI,
    collectModule: value.collectModule,
    collectModuleInitData: value.collectModuleInitData,
    referenceModule: value.referenceModule,
    referenceModuleInitData: value.referenceModuleInitData,
    sig: {
      v,
      r,
      s,
      deadline: value.deadline,
    },
  });
});
</script>

<style>
.white {
  background-color: white;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container {
  max-width: 800px;
}

.input-container {
  width: 100%;
  padding: 16px;
  margin: 16px;
  border-radius: 16px;
  border: 1px solid white;
}
</style>
