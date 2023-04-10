<template>
  <div class="side-menu-selected-category-layout">
    <div class="overlap-group1">
      <div class="overlap-group" :style="{ 'background-image': `url(${overlapGroup})` }">
        <img class="base" :src="base" alt="Base" />
      </div>
      <div class="icon">
        <div class="home-fill" :style="{ 'background-image': `url(${homeFill})` }" />
      </div>
      <div class="menu nunito-bold-white-17px">
        {{ menu }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  overlapGroup: string;
  base: string;
  homeFill: string;
  menu: string;
}
defineProps<Props>();
</script>

<style>
.side-menu-selected-category-layout {
  align-items: flex-start;
  display: flex;
  height: 56px;
  justify-content: center;
  min-width: 212px;
}

.overlap-group1 {
  height: 76px;
  margin-top: -10px;
  position: relative;
  width: 232px;
}

.overlap-group {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 76px;
  left: 0;
  min-width: 232px;
  padding: 0 10px;
  position: absolute;
  top: 0;
}

.base {
  height: 56px;
  width: 212px;
}

.icon {
  align-items: flex-start;
  border: 1px solid;
  border-color: var(--scooter);
  border-radius: 40px;
  box-shadow: 0px 4px 8px #00000033;
  display: flex;
  height: 40px;
  left: 18px;
  min-width: 40px;
  padding: 9px 10px;
  position: absolute;
  top: 18px;
}

.home-fill {
  background-size: 100% 100%;
  height: 20px;
  width: 18px;
}

.menu {
  font-weight: 700;
  left: 94px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 27px;
  white-space: nowrap;
}
</style>
