<template>
  <div class="desktop-large-layout" v-for="publication in publications">
    <div class="overlap-group-1">
      <div class="overlap-group-2">
        <img class="rectangle-3" :src="defaultProfileImage" alt="Rectangle" />
      </div>
      <div class="my-favorite-songs nunito-normal-white-15px-2">{{ publication.metadata.content }}</div>
      <div class="my-favorite-songs2 nunito-normal-white-15px-2">{{ publication.metadata.description }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { PublicationSortCriteria, useExplorePublicationsQuery } from '@/graphql/generated';

interface Props {
  rectangle: string;
  myFavoriteSongs: string;
}
defineProps<Props>();

const { result } = useExplorePublicationsQuery({
  request: {
    sortCriteria: PublicationSortCriteria.Latest,
    sources: 'lens_protocol_dima',
  },
});

const publications = computed(() => result.value?.explorePublications.items);
const defaultProfileImage =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
</script>

<style>
.desktop-large-layout {
  align-items: flex-start;
  display: flex;
  height: 177px;
  justify-content: center;
  min-width: 198px;
}

.overlap-group-1 {
  height: 180px;
  margin-top: -1.5px;
  position: relative;
  width: 201px;
}

.overlap-group-2 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-5E075E7D-553D-4CCB-BF0C-022EB4C50A17@2x.png);
  background-size: 100% 100%;
  height: 180px;
  left: 0;
  position: absolute;
  top: 0;
  width: 201px;
}

.rectangle-3 {
  border-radius: 10px;
  height: 117px;
  left: 12px;
  object-fit: cover;
  position: absolute;
  top: 12px;
  width: 178px;
}

.play {
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  align-items: flex-start;
  backdrop-filter: blur(10px) saturate(100%);
  background-color: var(--black-2);
  border: 1px solid;
  border-color: var(--black);
  border-radius: 32px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  left: 142px;
  min-width: 32px;
  padding: 9px 11px;
  position: absolute;
  top: 110px;
}

.arrow-right-fill {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-arrow-right-fill-9B53BBEC-5400-4B90-BA88-2EA21E9BA4B8@2x.png);
  background-size: 100% 100%;
  height: 12px;
  width: 9px;
}

.my-favorite-songs {
  left: 12px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 144px;
  white-space: nowrap;
}

.my-favorite-songs2 {
  right: 22px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 144px;
  white-space: nowrap;
}
</style>
