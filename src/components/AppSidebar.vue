<template>
  <div :class="styles.nav">
    <div class="mb-10">
      <NavLink icon="assets/home.svg" title="Home" :class-name="styles.link" />
      <NavLink icon="assets/search.svg" title="Search" :class-name="styles.link" />
      <NavLink icon="assets/playlist.svg" title="Your library" :class-name="styles.link" />
    </div>

    <div class="mb-5 border-b border-gray-100/10">
      <NavLink icon="assets/add.svg" title="Create Playlist" :class-name="styles.link" />
      <NavLink icon="assets/heart.svg" title="Liked Songs" :class-name="styles.link" />
    </div>

    <div class="mt-5 leading-8 flex flex-col gap-[10px]">
      <p class="text-sm">GHOST SONGS</p>
      <p :class="styles.playlistName">CarPlay Vol.2</p>
      <p :class="styles.playlistName">Country Dump</p>
      <p :class="styles.playlistName">Energy Booster: Country</p>
      <p :class="styles.playlistName">Funky</p>
      <p :class="styles.playlistName">Coaching 🔥</p>
      <p :class="styles.playlistName">Country</p>
      <p :class="styles.playlistName">Your Top Songs 2019</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const styles = {
  nav: `bg-black h-screen w-96 p-5 py-10 `,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`,
};
</script>
