<template>
  <div class="desktop-top-navigation">
    <div class="arrow-ios">
      <icon name="arrowLeft" />
    </div>
    <div class="arrow-ios">
      <icon name="arrowRight" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.desktop-top-navigation {
  align-items: center;
  display: flex;
  gap: 34px;
  height: 32px;
  min-width: 72px;
  padding: 0 12px;
}

.arrow-ios {
  background-size: 100% 100%;
  height: 14px;
  width: 7px;
}
</style>
