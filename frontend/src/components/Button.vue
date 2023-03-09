<template>
  <button v-if="!account" class="connect-button" :onclick="refetchChallenge">Connect to Metamask</button>
  <button v-if="!cryptoStore.readAccessToken" class="connect-button" :onclick="loginAccount">
    Login to Lens Protocol
  </button>

  <div v-if="profileQuery.result.value?.defaultProfile?.handle">
    Hello {{ profileQuery.result.value?.defaultProfile.handle }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { ethers } from 'ethers';
import { useChallengeQuery, useAuthenticateMutation, useDefaultProfileQuery } from '@/graphql/generated';

import { useCryptoStore } from '@/stores/crypto';

const cryptoStore = useCryptoStore();
const { account } = storeToRefs(cryptoStore);

let signature = ref<string>();

const { result, refetch } = useChallengeQuery(
  () => ({
    request: {
      address: account.value,
    },
  }),
  () => ({
    enabled: !!account.value,
  })
);

const refetchChallenge = async () => {
  await setAccountAddress();
  await refetch();
};

const getSigner = () => {
  return new ethers.Wallet(String(import.meta.env.VITE_PK) as string);
};

const signText = (text: string) => {
  return getSigner().signMessage(text);
};

const { mutate: sendSignedMessage } = useAuthenticateMutation();

const { setAccountAddress, setAccessToken } = useCryptoStore();

const loginAccount = async () => {
  await signText(result?.value?.challenge.text);
  signature.value = await signText(result?.value?.challenge.text);

  const { data } = await sendSignedMessage({
    request: {
      address: account.value,
      signature: signature.value,
    },
  });

  const { accessToken, refreshToken } = data.authenticate;

  setAccessToken(accessToken, refreshToken);
};

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
</script>
<style>
.connect-button {
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
