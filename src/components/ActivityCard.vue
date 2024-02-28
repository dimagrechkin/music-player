<template>
  <div :class="styles.activityCard">
    <div :class="styles.profileAvatarContainer">
      <img alt="" :src="avatar" :width="50" :height="50" />
    </div>
    <div>
      <div>{{ title }}</div>
      <div class="opacity-60">{{ subTitle }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  title: string;
  subTitle: string;
  avatar: string;
}
defineProps<Props>();
const styles = {
  profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
  activityCard: `flex mb-6 cursor-pointer hover:opacity-50`,
  avatar: `rounded-full object-cover`,
};
</script>
