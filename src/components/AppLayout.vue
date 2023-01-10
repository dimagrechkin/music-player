<template>
  <div class="main-content">
    <slot name="sidebar"></slot>

    <slot name="header"></slot>
    <div class="main-scroll">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
