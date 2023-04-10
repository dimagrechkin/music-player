<template>
  <div :class="[`desktop-list-layout-5`, className || ``]">
    <div class="flex-row">
      <img class="rectangle-4" :src="rectangle" alt="Rectangle" />
      <div class="group-12">
        <div class="about-damn-time nunito-normal-white-15px-3">
          {{ aboutDamnTime }}
        </div>
        <div class="lizzo nunito-normal-white-11px">
          {{ lizzo }}
        </div>
      </div>
      <div class="text-1 nunito-normal-white-11px">4:35</div>
      <div class="more-horizontal" />
    </div>
    <div class="rectangle-5" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'DesktopListLayout',
  props: ['rectangle', 'aboutDamnTime', 'lizzo', 'className'],
};
</script>

<style>
.desktop-list-layout-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 18px;
  min-height: 59px;
  position: absolute;
  top: 58px;
  width: 380px;
}

.flex-row {
  align-items: center;
  display: flex;
  min-width: 373px;
}

.rectangle-4 {
  border-radius: 10px;
  height: 50px;
  object-fit: cover;
  width: 50px;
}

.group-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 2px;
  margin-left: 8px;
  min-height: 34px;
  width: 62px;
}

.about-damn-time {
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
}

.lizzo {
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
}

.text-1 {
  letter-spacing: 0;
  line-height: 13px;
  margin-left: 195px;
  margin-top: 1px;
  min-height: 15px;
  min-width: 25px;
  white-space: nowrap;
}

.more-horizontal {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-more-horizontal-1E378157-DFA1-461B-AF84-452BB4472EF8@2x.png);
  background-size: 100% 100%;
  height: 4px;
  margin-left: 15px;
  width: 18px;
}

.rectangle-5 {
  border: 1px solid;
  border-color: var(--white-3);
  height: 1px;
  width: 380px;
}

.desktop-list-layout-5.desktop-list-layout-1 {
  top: 124px;
}

.desktop-list-layout-5.desktop-list-layout-1 .group-12 {
  width: 45px;
}

.desktop-list-layout-5.desktop-list-layout-1 .text-1 {
  margin-left: 212px;
}

.desktop-list-layout-5.desktop-list-layout-2 {
  top: 190px;
}

.desktop-list-layout-5.desktop-list-layout-2 .group-12 {
  width: 68px;
}

.desktop-list-layout-5.desktop-list-layout-2 .text-1 {
  margin-left: 189px;
}

.desktop-list-layout-5.desktop-list-layout .group-12 {
  width: 52px;
}

.desktop-list-layout-5.desktop-list-layout .text-1 {
  margin-left: 205px;
}

.desktop-list-layout-5.desktop-list-layout-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 18px;
  min-height: 59px;
  position: absolute;
  top: 126px;
  width: 380px;
}

.desktop-list-layout-5.desktop-list-layout-3 .group-12 {
  width: 65px;
}

.desktop-list-layout-5.desktop-list-layout-3 .text-1 {
  margin-left: 192px;
}

.desktop-list-layout-5.desktop-list-layout-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 18px;
  min-height: 59px;
  position: absolute;
  top: 192px;
  width: 380px;
}

.desktop-list-layout-5.desktop-list-layout-4 .group-12 {
  gap: 1px;
  margin-bottom: unset;
  min-height: 36px;
  width: 135px;
}

.desktop-list-layout-5.desktop-list-layout-4 .about-damn-time {
  min-height: 20px;
}

.desktop-list-layout-5.desktop-list-layout-4 .lizzo {
  min-height: 15px;
}

.desktop-list-layout-5.desktop-list-layout-4 .text-1 {
  margin-left: 122px;
}
</style>
