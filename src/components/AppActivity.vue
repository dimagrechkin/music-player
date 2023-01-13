<template>
  <div :class="styles.activity">
    <div :class="styles.title">
      Friend Activity
      <img src="assets/friend.svg" alt="" />
    </div>

    <div class="mb-10">
      <activity-card
        v-for="(activity, index) in activities"
        :key="index"
        :avatar="activity.avatar"
        :title="activity.title"
        :sub-title="activity.subTitle"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { activities } from '@/mocks/activities';
import ActivityCard from '@/components/ActivityCard.vue';

const styles = {
  activity: `bg-black w-96 h-screen p-5 py-10 text-white`,
  title: `flex items-center justify-between mb-10`,
  profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
  activityCard: `flex mb-6`,
};
</script>
