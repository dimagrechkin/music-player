<template>
  <div :class="style.header">
    <div :class="style.headerWrapper">
      <div class="flex items-center">
        <div :class="style.arrowButton">
          <img alt="" src="@/assets/chevronLeft.svg" :width="20" :height="20" />
        </div>
        <div :class="style.arrowButton">
          <img alt="" src="@/assets/chevronRight.svg" :width="20" :height="20" />
        </div>
      </div>

      <div :class="style.headerRight">
        <UploadButton set-show-upload-music="{setShowUploadMusic}" />

        <div :class="style.profile">
          <div :class="style.profileAvatarContainer">
            <img alt="" src="@/assets/avatar.jpg" class="rounded-full" />
          </div>
          <p>Your Name</p>
        </div>
      </div>
    </div>

    <div :class="style.playlistTextContent">
      <img alt="" src="https://angartwork.akamaized.net/webp/?id=150949021&size=296" :width="220" :height="220" />
      <div class="ml-5">
        <div>ALBUM</div>
        <div :class="style.title">Your Album</div>
        <div class="flex items-center mt-5">
          <div :class="style.profileAvatarContainer">
            <img alt="" src="@/assets/avatar.jpg" class="rounded-full" />
          </div>
          <p><span class="text-bold">SteamBeats</span> • 2020 • 46 songs, 3 hr 20 min</p>
        </div>
      </div>
    </div>

    <div :class="style.controlsContainer">
      <div :class="style.playButton">
        <img alt="" src="@/assets/play.svg" :width="30" :height="30" />
      </div>
      <div :class="style.iconContainer">
        <img alt="" src="@/assets/heart.svg" :width="30" :height="30" />
      </div>
      <div :class="style.iconContainer">
        <img alt="" src="@/assets/download.svg" :width="30" :height="30" />
      </div>
      <div :class="style.iconContainer">
        <img alt="" src="@/assets/more.svg" :width="30" :height="30" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const style = {
  arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  headerRight: `flex`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  iconContainer: `ml-10`,
  title: `text-6xl font-extrabold`,
  header: `max-w-7xl m-auto p-3`,
  headerWrapper: `flex items-center justify-between`,
  playlistTextContent: `flex items-end mt-10`,
  profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3`,
  controlsContainer: `flex items-center mt-10`,
  playButton: `bg-green-500 w-16 h-16 flex pl-2 items-center justify-center rounded-full cursor-pointer`,
};
</script>
