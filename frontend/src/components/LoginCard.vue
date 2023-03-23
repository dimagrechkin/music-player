<template>
  <div class="login-card">
    <div class="overlap-group-top-card" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
      <h1 class="title">{{ title }}</h1>
      <p class="sub-title">{{ subTitle }}</p>
      <div class="button-container">
        <button class="button" :onclick="refetchChallenge">
          <span class="connect nunito-medium-white-15px">{{ firstButtonText }}</span>
        </button>
        <button class="button" :onclick="loginAccount">
          <span class="connect nunito-medium-white-15px">{{ secondButtonText }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { ethers } from 'ethers';
import { useChallengeQuery, useAuthenticateMutation } from '@/graphql/generated';

import { useCryptoStore } from '@/stores/crypto';

interface Props {
  title: string;
  subTitle:string;
  firstButtonText: string;
  secondButtonText:string;
}

defineProps<Props>();
const backgroundImage = "src/images/discoverImage.jpg"

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

</script>

<style>
.login-card {
  align-items: flex-start;
  display: flex;
  height: 217px;
  min-width: 840px;
}

.overlap-group-top-card {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 217px;
  padding: 46px 32px;
  width: 840px;
}

.title {
  color: var(--white-4);
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  margin-top: 1px;
  min-height: 46px;
}

.sub-title {
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  margin-top: 4px;
  min-height: 20px;
  white-space: nowrap;
}

.button-container {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-top: 16px;
  min-width: 296px;
}

.button {
  -webkit-backdrop-filter: blur(30px) saturate(100%);
  align-items: flex-start;
  backdrop-filter: blur(30px) saturate(100%);
  border: 1px solid;
  border-color: #0c9aff;
  border-radius: 19px;
  display: flex;
  height: 38px;
  min-width: 140px;
  padding: 8px 28px;
}

.connect{
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  min-height: 20px;
  white-space: nowrap;
}

.login {
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  min-height: 20px;
  min-width: 79px;
  white-space: nowrap;
}
</style>
