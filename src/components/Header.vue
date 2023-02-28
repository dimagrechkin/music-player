<template>
  <div class="header-container">
    <div
      @click="
        router.push({
          name: appConfig.routes.profiles.module,
        })
      "
      class="home-link"
    >
      Profiles
    </div>
    <div class="right">
      <app-sign-in-button />
    </div>
  </div>
  <div style="height: 64px"></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import AppSignInButton from './Button.vue';
import appConfig from '@/utils/config';

const router = useRouter();
</script>

<style>
.header-container {
  color: white;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: grey;
  z-index: 9999;
}

.header {
  background-color: black;
  padding: 20px;
}

.home-link {
  margin-left: 16px;
}

.margin-right {
  margin-right: 16px;
}
</style>
