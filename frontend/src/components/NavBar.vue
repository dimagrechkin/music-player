<template>
  <div class="side-menu">
    <div class="overlap-group">
      <div class="rectangle" />
      <img
        class="path"
        src="https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-path-98BF93D2-948C-4452-A943-7D8AE8F149B7.png"
        alt="Path"
      />
      <div class="library">
        <side-menu-selected-category-layout
          :overlap-group="mockedData.sideMenuSelectedCategoryLayoutProps.overlapGroup"
          :base="mockedData.sideMenuSelectedCategoryLayoutProps.base"
          :home-fill="mockedData.sideMenuSelectedCategoryLayoutProps.homeFill"
          :menu="mockedData.sideMenuSelectedCategoryLayoutProps.menu"
        />
        <side-menu-item
          icon="Profile"
          :list-item="mockedData.sideMenuLayoutProps.profiles"
          @navigation-click="moveToHomePage"
        />
        <side-menu-item
          icon="Plus"
          :list-item="mockedData.sideMenuLayoutProps.createPost"
          @navigation-click="moveToCreatePage"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

import SideMenuSelectedCategoryLayout from '@/components/SideMenuSelectedCategoryLayout.vue';
import SideMenuItem from '@/components/SideMenuItem.vue';
import appConfig from '@/utils/config';

import { mockedData } from '@/mocks';

const router = useRouter();

const moveToCreatePage = () =>
  router.push({
    name: appConfig.routes.create,
  });

const moveToHomePage = () =>
  router.push({
    name: 'base-path',
  });
</script>

<style scoped>
.side-menu {
  align-items: flex-start;
  display: flex;
  height: 1080px;
  min-width: 252px;
}

.overlap-group {
  height: 1140px;
  margin-left: -22px;
  margin-top: -38px;
  position: relative;
  width: 275px;
}

.rectangle {
  background-color: #00000033;
  border: 1px solid;
  border-color: #0000004d;
  height: 1082px;
  left: 21px;
  position: absolute;
  top: 37px;
  width: 254px;
}

.path {
  height: 1140px;
  left: 0;
  position: absolute;
  top: 0;
  width: 140px;
}

.library {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 43px;
  min-height: 296px;
  position: absolute;
  top: 94px;
  width: 212px;
}
</style>
