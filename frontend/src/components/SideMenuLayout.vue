<template>
  <div :class="[`side-menu-layout-12`, className || ``]">
    <icon name="Profile"></icon>
    <div class="search-1 nunito-normal-white-15px">{{ listItem }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  className: string;
  listItem: string;
}
defineProps<Props>();
</script>

<style>
.side-menu-layout-12 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  height: 32px;
  margin-right: 13px;
  min-width: 140px;
  padding: 6px;
}

.search {
  background-size: 100% 100%;
  height: 19px;
  width: 20px;
}

.search-1 {
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
}

.side-menu-layout-12.side-menu-layout-1 {
  align-items: center;
  gap: 11px;
  padding: 0 7px;
}

.side-menu-layout-12.side-menu-layout-1 .search {
  height: 18px;
  width: 18px;
}

.side-menu-layout-12.side-menu-layout-1 .search-1 {
  min-height: 20px;
  min-width: 48px;
}

.side-menu-layout-12.side-menu-layout-2 {
  gap: 11px;
  padding: 6px 7px;
}

.side-menu-layout-12.side-menu-layout-2 .search {
  align-self: center;
  height: 18px;
  width: 18px;
}

.side-menu-layout-12.side-menu-layout .search,
.side-menu-layout-12.side-menu-layout-6 .search,
.side-menu-layout-12.side-menu-layout-9 .search {
  align-self: center;
  height: 17px;
  margin-top: 1px;
}

.side-menu-layout-12.side-menu-layout-3 {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 32px;
  margin-right: 13px;
  min-width: 140px;
  padding: 0 6px;
}

.side-menu-layout-12.side-menu-layout-3 .search {
  height: 20px;
}

.side-menu-layout-12.side-menu-layout-3 .search-1 {
  margin-bottom: 2px;
  min-width: 86px;
}

.side-menu-layout-12.side-menu-layout-4 {
  align-items: center;
  display: flex;
  gap: 13px;
  height: 32px;
  margin-right: 13px;
  min-width: 140px;
  padding: 0 9px;
}

.side-menu-layout-12.side-menu-layout-4 .search,
.side-menu-layout-12.side-menu-layout-11 .search {
  height: 20px;
  width: 14px;
}

.side-menu-layout-12.side-menu-layout-4 .search-1 {
  margin-bottom: 2px;
  min-width: 66px;
}

.side-menu-layout-12.side-menu-layout-5 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  height: 32px;
  justify-content: flex-end;
  margin-right: 7px;
  min-width: 145px;
  padding: 6px 0;
}

.side-menu-layout-12.side-menu-layout-6 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  height: 32px;
  justify-content: flex-end;
  margin-right: 12px;
  min-width: 140px;
  padding: 6px 0px;
}

.side-menu-layout-12.side-menu-layout-7 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 32px;
  margin-right: 12px;
  min-width: 140px;
  padding: 0 8px;
}

.side-menu-layout-12.side-menu-layout-7 .search {
  height: 20px;
  width: 16px;
}

.side-menu-layout-12.side-menu-layout-7 .search-1 {
  margin-bottom: 2px;
  min-width: 46px;
}

.side-menu-layout-12.side-menu-layout-8 {
  align-items: flex-start;
  display: flex;
  gap: 13px;
  height: 32px;
  margin-right: 12px;
  min-width: 140px;
  padding: 6px 9px;
}

.side-menu-layout-12.side-menu-layout-8 .search {
  align-self: center;
  height: 18px;
  width: 14px;
}

.side-menu-layout-12.side-menu-layout-9 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  height: 32px;
  justify-content: flex-end;
  margin-right: -8px;
  min-width: 160px;
  padding: 6px 0;
}

.side-menu-layout-12.side-menu-layout-10 {
  align-items: flex-start;
  display: flex;
  gap: 13px;
  height: 32px;
  justify-content: flex-end;
  margin-right: -4px;
  min-width: 156px;
  padding: 6px 0;
}

.side-menu-layout-12.side-menu-layout-10 .search {
  align-self: center;
  height: 18px;
  width: 16px;
}

.side-menu-layout-12.side-menu-layout-11 {
  align-items: center;
  display: flex;
  gap: 13px;
  height: 32px;
  justify-content: flex-end;
  margin-right: 2px;
  min-width: 150px;
}

.side-menu-layout-12.side-menu-layout-11 .search-1 {
  margin-bottom: 2px;
  min-width: 116px;
}
</style>
