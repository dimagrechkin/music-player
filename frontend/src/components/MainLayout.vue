<template>
  <div class="flex-col">
    <top-nav-bar />
    <router-view :key="$route.path" />
  </div>
</template>
<script setup lang="ts">
import TopNavBar from '@/components/TopNavBar.vue';
</script>

<style scoped>
.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1113px;
  width: 889px;
}
</style>
