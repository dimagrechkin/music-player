<template>
  <div class="top-navigation">
    <desktop-top-navigation />
    <searchfiled :search1="mockedData.searchfiledProps.search1" :search2="mockedData.searchfiledProps.search" />
    <top-left-navigation
      :bellFill="mockedData.topLeftNavigationProps.bellFill"
      :profile-name="profileQuery.result.value?.defaultProfile.handle"
      :arrowIosDown="mockedData.topLeftNavigationProps.arrowIosDown"
    />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';

import DesktopTopNavigation from '@/components/DesktopTopNavigation.vue';
import Searchfiled from '@/components/Searchfiled.vue';
import TopLeftNavigation from '@/components/TopLeftNavigation.vue';
import { useDefaultProfileQuery } from '@/graphql/generated';

import { useCryptoStore } from '@/stores/crypto';
import { mockedData } from '@/mocks';

const cryptoStore = useCryptoStore();
const { account } = storeToRefs(cryptoStore);

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
</style>
