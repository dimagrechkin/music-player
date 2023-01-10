<template>
  <app-layout>
    <template #header> header </template>
    <template #sidebar> sidebar </template>
    <template #main>
      <router-view></router-view>
    </template>
  </app-layout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
</script>
