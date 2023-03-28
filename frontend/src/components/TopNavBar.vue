<template>
  <div class="top-navigation">
    <desktop-top-navigation />
    <searchfiled :search1="mockedData.searchfiledProps.search1" :search2="mockedData.searchfiledProps.search" />
    <top-left-navigation
      :bellFill="mockedData.topLeftNavigationProps.bellFill"
      :profile-name="mockedData.topLeftNavigationProps.profileName"
      :arrowIosDown="mockedData.topLeftNavigationProps.arrowIosDown"
    />
  </div>
</template>
<script setup lang="ts">
import DesktopTopNavigation from '@/components/DesktopTopNavigation.vue';
import Searchfiled from '@/components/Searchfiled.vue';
import TopLeftNavigation from '@/components/TopLeftNavigation.vue';

import { mockedData } from '@/mocks';
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
