<template>
  <div class="feed-container">
    <div v-for="publication in result?.explorePublications.items" :key="publication.id">
      <card-profile :publication="publication" :key="publication.id"></card-profile>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardProfile from './CardProfile.vue';
import { PublicationSortCriteria, useExplorePublicationsQuery } from '@/graphql/generated';

const { result } = useExplorePublicationsQuery({
  request: {
    sortCriteria: PublicationSortCriteria.Latest,
  },
});
</script>

<style>
.card {
  width: 300px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.card-content {
  padding: 10px;
}

.card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.card p {
  font-size: 16px;
}
</style>
