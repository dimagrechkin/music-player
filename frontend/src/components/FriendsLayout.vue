<template>
  <div :class="[`friend-layout`, selected || ``]">
    <!-- <div class="flex-row-1">
      <div class="overlap-group-3">
        <img class="oval-4" :src="mockedFriendPicture" alt="mockedFriend" />
      </div>
      <p class="jason-harry-listenin nunito-normal-white-15px-2" v-html="activity" />
    </div>
    <div class="rectangle-6" /> -->
    No followers
  </div>
</template>

<script lang="ts" setup>
interface Props {
  selected: boolean;
  activity: string;
}
defineProps<Props>();

const mockedFriendPicture = '/src/assets/mockedFriend.png';
</script>

<style>
.friend-layout {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-right: 10px;
  margin-top: 32px;
  min-height: 82px;
  width: 265px;
}

.flex-row-1 {
  align-items: center;
  display: flex;
  gap: 18px;
  margin-left: -5px;
  margin-top: -6px;
  min-width: 216px;
}

.overlap-group-3 {
  align-items: flex-start;
  border: 4px solid;
  border-color: var(--scooter);
  border-radius: 70px;
  display: flex;
  filter: blur(5px);
  height: 74px;
  min-width: 74px;
}

.oval-4 {
  height: 60px;
  margin-left: -1px;
  margin-top: -1px;
  width: 60px;
}

.jason-harry-listenin {
  letter-spacing: 0;
  line-height: 18px;
  margin-top: 8px;
  min-height: 54px;
  min-width: 124px;
}

.rectangle-6 {
  border: 1px solid;
  border-color: var(--white-3);
  height: 1px;
  width: 265px;
}

.friend-layout.friend-layout-1 {
  margin-right: 2px;
  margin-top: 8px;
  width: 273px;
}

.friend-layout.friend-layout-1 .flex-row-1 {
  min-width: 215px;
}

.friend-layout.friend-layout-1 .overlap-group-3,
.friend-layout.friend-layout-4 .overlap-group-3 {
  border-color: var(--razzle-dazzle-rose);
}

.friend-layout.friend-layout-1 .jason-harry-listenin {
  min-width: 123px;
}

.friend-layout.friend-layout-1 .rectangle-6 {
  width: 273px;
}

.friend-layout.friend-layout-2 {
  margin-right: 11px;
  margin-top: 8px;
  width: 264px;
}

.friend-layout.friend-layout-2 .flex-row-1 {
  min-width: 208px;
}

.friend-layout.friend-layout-2 .overlap-group-3 {
  border-color: #9b45ff;
}

.friend-layout.friend-layout-2 .jason-harry-listenin {
  min-width: 116px;
}

.friend-layout.friend-layout-2 .rectangle-6 {
  width: 264px;
}

.friend-layout.friend-layout-3 {
  margin-right: unset;
  margin-top: 8px;
  width: 276px;
}

.friend-layout.friend-layout-3 .flex-row-1 {
  min-width: 222px;
}

.friend-layout.friend-layout-3 .jason-harry-listenin {
  min-width: 130px;
}

.friend-layout.friend-layout-3 .rectangle-6 {
  width: 276px;
}

.friend-layout.friend-layout-4 {
  margin-right: 5px;
  margin-top: 8px;
  width: 270px;
}

.friend-layout.friend-layout-4 .flex-row-1 {
  min-width: 212px;
}

.friend-layout.friend-layout-4 .jason-harry-listenin {
  min-width: 120px;
}

.friend-layout.friend-layout-4 .rectangle-6 {
  width: 270px;
}
</style>
