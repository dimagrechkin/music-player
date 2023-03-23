<template>
  <div class="desktop-small-layout-5">
    <div class="overlap-group4">
      <img class="rectangle-2" :src="rectangle" alt="Rectangle" />
      <div class="image-artists-doja-cat" :style="{ 'background-image': 'url(' + imageArtistsDojaCat + ')' }"></div>
      <div class="doja-cat nunito-normal-white-13px">{{ dojaCat }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DesktopSmallLayout2",
  props: ["rectangle", "imageArtistsDojaCat", "dojaCat"],
};
</script>

<style>
.desktop-small-layout-5 {
  align-items: flex-start;
  display: flex;
  height: 147px;
  justify-content: center;
  min-width: 120px;
}

.overlap-group4 {
  height: 148px;
  margin-top: -1.5px;
  position: relative;
  width: 123px;
}

.rectangle-2 {
  height: 140px;
  left: 0;
  position: absolute;
  top: 0;
  width: 123px;
}

.image-artists-doja-cat {
  background-size: 100% 100%;
  height: 100px;
  left: 12px;
  position: absolute;
  top: 12px;
  width: 100px;
}

.doja-cat {
  left: 36px;
  letter-spacing: 0;
  line-height: 15px;
  position: absolute;
  text-align: center;
  top: 116px;
  width: 51px;
}
</style>
