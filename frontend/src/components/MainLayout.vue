<template>
  <div class="flex-col">
    <div class="top-navigation">
      <desktop-top-navigation />
      <searchfiled :search1="mockedData.searchfiledProps.search1" :search2="mockedData.searchfiledProps.search2" />
      <top-left-navigation
        :bellFill="mockedData.topLeftNavigationProps.bellFill"
        :profile-name="mockedData.topLeftNavigationProps.profileName"
        :arrowIosDown="mockedData.topLeftNavigationProps.arrowIosDown"
      />
    </div>
    <div class="discover">{{ mockedData.discover }}</div>
    <div class="flex-col-1 nunito-bold-white-17px">
      <login-card
        :title="mockedData.desktopTopCardProps.title"
        :sub-title="mockedData.desktopTopCardProps.subTitle"
        :first-button-text="mockedData.desktopTopCardProps.firstButtonText"
        :second-button-text="mockedData.desktopTopCardProps.secondButtonText"
      />
      <div class="favorite-artists">
        <div class="favorite-artists-1">{{ mockedData.favoriteArtists }}</div>
        <img class="line" :src="mockedData.line1" alt="Line" />
        <div class="desktopsmalllayout-container">
          <favourite-profiles-layout
            :imageArtistsDojaCat="mockedData.desktopSmallLayout1Props.imageArtistsDojaCat"
            :dojaCat="mockedData.desktopSmallLayout1Props.dojaCat"
          />
        </div>
      </div>
      <div class="recommended-for-you">
        <div class="recommended-for-you-1">{{ mockedData.recommendedForYou }}</div>
        <img class="line" :src="mockedData.line2" alt="Line" />
        <div class="desktoplargelayout-container">
          <desktop-large-layout
            :rectangle="mockedData.recomendedForYouProps.rectangle"
            :myFavoriteSongs="mockedData.recomendedForYouProps.myFavoriteSongs"
          />
        </div>
      </div>
      <div class="overlap-group-container">
        <div class="overlap-group10">
          <div class="overlap-group9">
            <img class="rectangle" :src="mockedData.rectangle1" alt="Rectangle" />
            <desktop-list-layout
              :rectangle="mockedData.topGroupLayout.rectangle"
              :aboutDamnTime="mockedData.topGroupLayout.aboutDamnTime"
              :lizzo="mockedData.topGroupLayout.lizzo"
            />
          </div>
          <div class="billboard-top-100">{{ mockedData.billboardTop100 }}</div>
        </div>
        <div class="overlap-group12">
          <div class="overlap-group11">
            <img class="rectangle" :src="mockedData.rectangle2" alt="Rectangle" />
            <desktop-list-layout
              :rectangle="mockedData.recentlyPlayProps.rectangle"
              :aboutDamnTime="mockedData.recentlyPlayProps.aboutDamnTime"
              :lizzo="mockedData.recentlyPlayProps.lizzo"
              :className="mockedData.recentlyPlayProps.className"
            />
          </div>
          <div class="recently-play">{{ mockedData.recentlyPlay }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import DesktopTopNavigation from '@/components/DesktopTopNavigation.vue';
import Searchfiled from '@/components/Searchfiled.vue';
import TopLeftNavigation from '@/components/TopLeftNavigation.vue';
import LoginCard from '@/components/LoginCard.vue';
import FavouriteProfilesLayout from '@/components/FavouriteProfilesLayout.vue';
import DesktopLargeLayout from '@/components/DesktopLargeLayout.vue';
import DesktopListLayout from '@/components/DesktopListLayout.vue';
import { mockedData } from '@/mocks';
</script>

<style scoped>
.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1113px;
  width: 889px;
}

.top-navigation {
  align-items: center;
  background-color: #00000019;
  display: flex;
  gap: 8px;
  height: 64px;
  min-width: 889px;
  padding: 0 24px;
  position: relative;
}

.discover {
  color: var(--white-2);
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 24px;
  margin-top: 32px;
  white-space: nowrap;
}

.flex-col-1 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;
  min-height: 965px;
  position: relative;
  width: 841px;
}

.favorite-artists {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 181px;
  width: 841px;
}

.favorite-artists-1,
.recommended-for-you-1 {
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.line {
  height: 3px;
  margin-left: -1.5px;
  margin-top: 2px;
  width: 844px;
}

.desktopsmalllayout-container {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 147px;
  margin-top: 14px;
  min-width: 840px;
  position: relative;
}

.recommended-for-you {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 221px;
  width: 841px;
}

.desktoplargelayout-container {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  height: 177px;
  margin-top: 14px;
  min-width: 840px;
  position: relative;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  justify-content: center;
  min-width: 841px;
}

.overlap-group10 {
  height: 250px;
  margin-top: -1.5px;
  position: relative;
  width: 415px;
}

.overlap-group9 {
  height: 250px;
  left: 0;
  position: absolute;
  top: 0;
  width: 415px;
}

.rectangle {
  height: 216px;
  left: 0;
  position: absolute;
  top: 0;
  width: 415px;
}

.billboard-top-100,
.recently-play {
  font-weight: 700;
  left: 18px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 18px;
  white-space: nowrap;
}

.overlap-group12 {
  height: 252px;
  margin-top: -1.5px;
  position: relative;
  width: 415px;
}

.overlap-group11 {
  height: 252px;
  left: 0;
  position: absolute;
  top: 0;
  width: 415px;
}
</style>
