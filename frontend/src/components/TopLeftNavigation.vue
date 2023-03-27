<template>
  <div class="top-left-navigation">
    <icon name="notification"></icon>

    <div class="account">
      <dropdown :profile-name="profileName" />
      <!-- <img
        class="oval-3"
        src="https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-A237993F-5DE2-44FD-9B67-DCDC50E9E005@2x.png"
        alt="Oval"
      />
      <div class="profile-name nunito-normal-white-15px-3">{{ sourasith }}</div>
      <div class="arrow-ios-down" :style="{ 'background-image': 'url(' + arrowIosDown + ')' }"></div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Dropdown from './Dropdown.vue';

interface Props {
  bellFill: string;
  profileName: string;
  arrowIosDown: string;
}

defineProps<Props>();
</script>

<style scoped>
.top-left-navigation {
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  min-width: 202px;
}

.account {
  align-items: center;
  background-color: var(--white-3);
  border-radius: 16px;
  display: flex;
  min-width: 162px;
}

.oval-3 {
  height: 32px;
  width: 32px;
}

.profile-name {
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 15px;
  min-height: 20px;
  min-width: 66px;
  white-space: nowrap;
}

.arrow-ios-down {
  background-size: 100% 100%;
  height: 7px;
  margin-left: 16px;
  margin-top: 3px;
  width: 14px;
}
</style>
