<template>
  <div class="container-center-horizontal">
    <div class="homepage screen">
      <nav-bar />
      <main-layout />
      <right-side-bar />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRefreshMutation } from './graphql/generated';
import { isTokenExpire } from './lib/auth/helpers';
import { useCryptoStore } from './stores/crypto';

import NavBar from '@/components/NavBar.vue';
import MainLayout from '@/components/MainLayout.vue';
import RightSideBar from '@/components/RightSideBar.vue';

onMounted(() => {
  refreshAccessToken();
});

const store = useCryptoStore();

const { mutate: getToken } = useRefreshMutation();

const refreshAccessToken = async () => {
  const currentRefreshToken = store.readAccessToken.refreshToken;

  if (!store.readAccessToken) return null;
  if (isTokenExpire(store.readAccessToken.exp)) {
    const result = await getToken({
      request: {
        refreshToken: currentRefreshToken,
      },
    });

    const { accessToken, refreshToken: newRefreshToken } = result?.data?.refresh ?? '';

    store.setAccessToken(accessToken, newRefreshToken);

    return accessToken as string;
  }
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  background: black;
}

.homepage {
  align-items: flex-start;
  background-color: #0e1c49;
  display: flex;
  min-width: 1440px;
}
</style>
