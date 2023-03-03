<template>
  <div class="header">
    <app-header></app-header>
  </div>
  <div class="body">
    <!-- <app-button></app-button>
    <app-profiles></app-profiles> -->
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import AppButton from './components/Button.vue';
import NestedRouterLayout from '@/layouts/NestedRouterLayout.vue';
import AppHeader from './components/Header.vue';
import AppProfiles from './components/Profiles.vue';
import { useRefreshMutation } from './graphql/generated';
import { isTokenExpire } from './lib/auth/helpers';
import { useCryptoStore } from './stores/crypto';

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

    const { accessToken, refreshToken: newRefreshToken } = result?.data?.refresh;

    store.setAccessToken(accessToken, newRefreshToken);

    return accessToken as string;
  }
};
</script>

<style scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: black;
}

.body {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.postsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
}
</style>
