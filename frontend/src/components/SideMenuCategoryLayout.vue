<template>
  <div :class="[`side-menu-category-layout`, className || ``]">
    <div class="menu-icon">
      <div class="grid-fill" :style="{ 'background-image': `url(${gridFill})` }" />
    </div>
    <div class="library-3 nunito-bold-white-17px">
      {{ library }}
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  gridFill: string;
  library: string;
  className: string;
}
defineProps<Props>();
</script>

<style>
.side-menu-category-layout {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-base-4D4D232A-3F7B-4064-B2C0-BEBDBE8AC1A5@2x.png);
  background-size: 100% 100%;
  display: flex;
  gap: 28px;
  height: 56px;
  width: 212px;
}

.menu-icon {
  align-items: flex-start;
  background-color: var(--white-6);
  border: 1px solid;
  border-color: var(--white-5);
  border-radius: 40px;
  display: flex;
  margin-left: 10px;
  min-width: 40px;
  padding: 10px;
}

.grid-fill {
  background-size: 100% 100%;
  height: 18px;
  width: 18px;
}

.library-3 {
  font-weight: 700;
  height: 23px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 17px;
  white-space: nowrap;
  width: 59px;
}

.side-menu-category-layout.side-menu-category-layout-1 {
  gap: 30px;
}

.side-menu-category-layout.side-menu-category-layout-1 .grid-fill {
  width: 16px;
}

.side-menu-category-layout.side-menu-category-layout-1 .library-3 {
  height: 20px;
  width: 56px;
}
</style>
