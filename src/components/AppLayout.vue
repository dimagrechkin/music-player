<template>
  <div class="flex">
    <slot name="sidebar"></slot>
    <div class="w-full">
      <slot name="header"></slot>
      <div class="main-scroll">
        <slot name="main"></slot>
      </div>
    </div>
    <slot name="activity"></slot>
  </div>
</template>

<script lang="ts" setup></script>
