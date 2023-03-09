<template>
  <div class="cardProfileContainer">
    <div class="cardProfileHeader" @click="openProfilePage(publication.profile.handle)">
      <img
        v-if="publication.metadata.media.length > 0"
        class="cardProfileProfileImage"
        :src="imgConverter(publication?.profile?.picture?.original?.url || '')|| defaultProfileImage"
        :alt="publication.metadata.name || publication.profile.handle"
      />
      <p class="cardProfileProfileName">
        {{ publication.profile.name || publication.profile.handle }}
      </p>
    </div>
    <div class="cardProfileContent">
      <img
        v-if="publication.metadata.media.length > 0"
        :src="imgConverter(publication.metadata.media[0].original.url)"
        :alt="publication.metadata.name || publication.profile.handle"
        class="cardProfileContentImage"
      />
      <h3>{{ publication.metadata.name }}</h3>
      <p>{{ publication.metadata.content }}</p>
    </div>
    <div class="feed-post-footer">
      <p>{{ publication.stats.totalAmountOfCollects }} Collects</p>
      <p>{{ publication.stats.totalAmountOfComments }} Comments</p>
      <p>{{ publication.stats.totalAmountOfMirrors }} Mirrors</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { imgConverter } from '@/utils/helpers';
import appConfig from '@/utils/config';
import { ExplorePublicationsQuery } from '@/graphql/generated';

const router = useRouter();

interface Props {
  publication: ExplorePublicationsQuery['explorePublications']['items'][0];
}

const openProfilePage = (id: string) =>
  router.push({
    name: appConfig.routes.profiles.singleIndex,
    params: { profileId: id },
  });

defineProps<Props>();

const defaultProfileImage = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
</script>

<style>
.cardProfileContainer {
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 30, 30, 0.9);
  border: 1px solid black;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
  gap: 16px;
  text-align: center;
}

.cardProfileHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}

.cardProfileProfileImage {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid black;
}

.cardProfileProfileName {
  font-size: 16px;
  font-weight: 600;
}

.cardProfileContentImage {
  height: 256px;
  font-weight: 600;
}

.card-profile-footer {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.feed-post-footer {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
</style>
