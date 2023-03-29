<template>
  <div :class="[`desktop-small-layout-1`, className || ``]" v-for="profile in profiles">
    <div class="doja-cat-container-1">
      <div class="image-artists-doja-cat-1" :style="{ 'background-image': 'url(' + defaultProfileImage + ')' }"></div>
      <div class="nunito-normal-white-13px">{{ profile.profile.handle }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { PublicationSortCriteria, useExplorePublicationsQuery } from '@/graphql/generated';

interface Props {
  imageArtistsDojaCat: string;
  dojaCat: string;
  className: string;
}
defineProps<Props>();

const { result } = useExplorePublicationsQuery({
  request: {
    sortCriteria: PublicationSortCriteria.Latest,
    sources: 'lens_protocol_dima',
  },
});
const profiles = computed(() => result.value?.explorePublications.items);
const defaultProfileImage =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
</script>

<style>
.desktop-small-layout-1 {
  align-items: flex-start;
  display: flex;
  height: 137px;
  justify-content: center;
  min-width: 120px;
}

.doja-cat-container-1 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-2E0740BA-360D-4D43-8F8B-7F1D35B978B0@2x.png);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: -1.5px;
  min-height: 140px;
  padding: 5.5px 0;
  width: 123px;
}

.image-artists-doja-cat-1 {
  background-size: 100% 100%;
  border-radius: 50%;
  height: 100px;
  margin-top: 6px;
  width: 100px;
}

.doja-cat-1 {
  letter-spacing: 0;
  line-height: 15px;
  margin-left: 1px;
  min-height: 18px;
  text-align: center;
  white-space: nowrap;
  width: 51px;
}

.desktop-small-layout-1.desktop-small-layout-2 .doja-cat-container-1,
.desktop-small-layout-1.desktop-small-layout-3 .doja-cat-container-1,
.desktop-small-layout-1.desktop-small-layout-4 .doja-cat-container-1,
.desktop-small-layout-1.desktop-small-layout .doja-cat-container-1 {
  padding: 7.5px 0;
}

.desktop-small-layout-1.desktop-small-layout-2 .image-artists-doja-cat-1,
.desktop-small-layout-1.desktop-small-layout-3 .image-artists-doja-cat-1,
.desktop-small-layout-1.desktop-small-layout-4 .image-artists-doja-cat-1,
.desktop-small-layout-1.desktop-small-layout .image-artists-doja-cat-1 {
  margin-top: 4px;
}

.desktop-small-layout-1.desktop-small-layout-2 .doja-cat-1,
.desktop-small-layout-1.desktop-small-layout-3 .doja-cat-1,
.desktop-small-layout-1.desktop-small-layout-4 .doja-cat-1,
.desktop-small-layout-1.desktop-small-layout .doja-cat-1 {
  min-height: 16px;
}
</style>
