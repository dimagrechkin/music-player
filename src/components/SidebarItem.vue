<template>
  <div :class="styles.navLink">
    <img alt="" :src="icon" :width="20" :height="20" />
    <p :class="styles.navLinkText">{{ title }}</p>
  </div>
</template>
<script lang="ts" setup>
interface NavItem {
  title: string;
  icon: string;
}
defineProps<NavItem>();
const styles = {
  navLink: `flex item-center mb-5 cursor-pointer hover:text-[#fff] text-[#b3b3b3]`,
  navLinkText: `ml-5`,
};
</script>
