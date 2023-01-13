<template>
  <app-layout>
    <template #header> <app-header /> </template>
    <template #sidebar> <app-sidebar /> </template>
    <template #main>
      <router-view></router-view>
    </template>
    <template #activity>
      <app-activity />
    </template>
  </app-layout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppActivity from '@/components/AppActivity.vue';
</script>
