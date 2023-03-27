<template>
  <div class="right-menu">
    <div class="friend-activity">{{ mockedData.friendActivity }}</div>
    <div class="address">{{ mockedData.address }}</div>
    <friends-layout :activity="mockedData.friendLayoutProps.activity" />
  </div>
</template>
<script setup lang="ts">
import FriendsLayout from '@/components/FriendsLayout.vue';
import { mockedData } from '@/mocks';
</script>

<style>
.right-menu {
  align-items: flex-end;
  background-color: #0000004c;
  display: flex;
  flex-direction: column;
  min-height: 1080px;
  padding: 22px 7px;
  position: relative;
  width: 299px;
}

.friend-activity {
  align-self: flex-start;
  color: var(--white-2);
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-m);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 10px;
  min-height: 20px;
  white-space: nowrap;
}

.address {
  align-self: flex-start;
  color: #ffffff98;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 10px;
  white-space: nowrap;
}
</style>
