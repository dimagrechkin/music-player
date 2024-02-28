<template>
  <div :class="styles.nav">
    <div class="mb-10">
      <NavLink :icon="HomeIcon" title="Home" :class-name="styles.link" />
      <NavLink :icon="SearchIcon" title="Search" :class-name="styles.link" />
      <NavLink :icon="PlaylistIcon" title="Your library" :class-name="styles.link" />
    </div>

    <div class="mb-5 border-b border-gray-100/10">
      <NavLink icon="assets/add.svg" title="Create Playlist" :class-name="styles.link" />
      <NavLink icon="assets/heart.svg" title="Liked Songs" :class-name="styles.link" />
    </div>

    <div class="mt-5 leading-8 flex flex-col gap-[10px]">
      <p v-for="playlist in playlists" :key="playlist.id" :class="styles.playlistName">{{ playlist.name }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HomeIcon from '@/assets/home.svg';
import SearchIcon from '@/assets/search.svg';
import PlaylistIcon from '@/assets/playlist.svg';

const styles = {
  nav: `bg-black h-screen w-96 p-5 py-10 `,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`,
};

const playlists = [
  {
    id: 1,
    name: 'CarPlay Vol.2',
  },
  {
    id: 2,
    name: 'Country Dump',
  },
  {
    id: 3,
    name: 'Energy Booster: Country',
  },
  {
    id: 4,
    name: 'Funky',
  },
  {
    id: 5,
    name: 'Coaching',
  },
  {
    id: 6,
    name: 'Country',
  },
  {
    id: 7,
    name: 'Your Top Songs 2019',
  },
];
</script>
