<template>
  <div class="container-center-horizontal">
    <div class="mediumcopy2 screen">
      <div class="side-menu">
        <div class="overlap-group2">
          <div class="rectangle-1"></div>
          <img
            class="path"
            src="https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-path-98BF93D2-948C-4452-A943-7D8AE8F149B7.png"
            alt="Path"
          />
          <browser-desktop />
          <div class="library">
            <side-menu-selected-category-layout
              :overlapGroup="sideMenuSelectedCategoryLayoutProps.overlapGroup"
              :base="sideMenuSelectedCategoryLayoutProps.base"
              :homeFill="sideMenuSelectedCategoryLayoutProps.homeFill"
              :menu="sideMenuSelectedCategoryLayoutProps.menu"
            />
            <side-menu-layout :search1="sideMenuLayout1Props.search1" :search2="sideMenuLayout1Props.search2" />
            <side-menu-layout
              :search1="sideMenuLayout2Props.search1"
              :search2="sideMenuLayout2Props.search2"
              :className="sideMenuLayout2Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout3Props.search1"
              :search2="sideMenuLayout3Props.search2"
              :className="sideMenuLayout3Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout4Props.search1"
              :search2="sideMenuLayout4Props.search2"
              :className="sideMenuLayout4Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout5Props.search1"
              :search2="sideMenuLayout5Props.search2"
              :className="sideMenuLayout5Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout6Props.search1"
              :search2="sideMenuLayout6Props.search2"
              :className="sideMenuLayout6Props.className"
            />
          </div>
          <div class="library-1">
            <side-menu-category-layout
              :gridFill="sideMenuCategoryLayout1Props.gridFill"
              :library="sideMenuCategoryLayout1Props.library"
            />
            <side-menu-layout
              :search1="sideMenuLayout7Props.search1"
              :search2="sideMenuLayout7Props.search2"
              :className="sideMenuLayout7Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout8Props.search1"
              :search2="sideMenuLayout8Props.search2"
              :className="sideMenuLayout8Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout9Props.search1"
              :search2="sideMenuLayout9Props.search2"
              :className="sideMenuLayout9Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout10Props.search1"
              :search2="sideMenuLayout10Props.search2"
              :className="sideMenuLayout10Props.className"
            />
          </div>
          <div class="library-2">
            <side-menu-category-layout
              :gridFill="sideMenuCategoryLayout2Props.gridFill"
              :library="sideMenuCategoryLayout2Props.library"
              :className="sideMenuCategoryLayout2Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout11Props.search1"
              :search2="sideMenuLayout11Props.search2"
              :className="sideMenuLayout11Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout12Props.search1"
              :search2="sideMenuLayout12Props.search2"
              :className="sideMenuLayout12Props.className"
            />
            <side-menu-layout
              :search1="sideMenuLayout13Props.search1"
              :search2="sideMenuLayout13Props.search2"
              :className="sideMenuLayout13Props.className"
            />
          </div>
        </div>
      </div>
      <div class="flex-col">
        <div class="top-navigation">
          <desktop-top-navigation
            :arrowIosLeft="desktopTopNavigationProps.arrowIosLeft"
            :arrowIosRight="desktopTopNavigationProps.arrowIosRight"
          />
          <searchfiled :search1="searchfiledProps.search1" :search2="searchfiledProps.search2" />
          <top-left-navigation
            :bellFill="topLeftNavigationProps.bellFill"
            :sourasith="topLeftNavigationProps.sourasith"
            :arrowIosDown="topLeftNavigationProps.arrowIosDown"
          />
        </div>
        <div class="discover">{{ discover }}</div>
        <div class="flex-col-1 nunito-bold-white-17px">
          <desktop-top-card
            :overlapGroup8="desktopTopCardProps.overlapGroup8"
            :getPremiumFreeFor="desktopTopCardProps.getPremiumFreeFor"
            :only999MonthAfterCancelAnytime="desktopTopCardProps.only999MonthAfterCancelAnytime"
            :getStarted="desktopTopCardProps.getStarted"
            :viewPlans="desktopTopCardProps.viewPlans"
          />
          <div class="favorite-artists">
            <div class="favorite-artists-1">{{ favoriteArtists }}</div>
            <img class="line" :src="line1" alt="Line" />
            <div class="desktopsmalllayout-container">
              <desktop-small-layout
                :imageArtistsDojaCat="desktopSmallLayout1Props.imageArtistsDojaCat"
                :dojaCat="desktopSmallLayout1Props.dojaCat"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="desktopSmallLayout2Props.imageArtistsDojaCat"
                :dojaCat="desktopSmallLayout2Props.dojaCat"
                :className="desktopSmallLayout2Props.className"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="desktopSmallLayout3Props.imageArtistsDojaCat"
                :dojaCat="desktopSmallLayout3Props.dojaCat"
                :className="desktopSmallLayout3Props.className"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="desktopSmallLayout4Props.imageArtistsDojaCat"
                :dojaCat="desktopSmallLayout4Props.dojaCat"
                :className="desktopSmallLayout4Props.className"
              />
              <desktop-small-layout2
                :rectangle="desktopSmallLayout2Props2.rectangle"
                :imageArtistsDojaCat="desktopSmallLayout2Props2.imageArtistsDojaCat"
                :dojaCat="desktopSmallLayout2Props2.dojaCat"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="desktopSmallLayout5Props.imageArtistsDojaCat"
                :dojaCat="desktopSmallLayout5Props.dojaCat"
                :className="desktopSmallLayout5Props.className"
              />
            </div>
          </div>
          <div class="recommended-for-you">
            <div class="recommended-for-you-1">{{ recommendedForYou }}</div>
            <img class="line" :src="line2" alt="Line" />
            <div class="desktoplargelayout-container">
              <desktop-large-layout
                :rectangle="desktopLargeLayout1Props.rectangle"
                :myFavoriteSongs="desktopLargeLayout1Props.myFavoriteSongs"
              />
              <desktop-large-layout
                :rectangle="desktopLargeLayout2Props.rectangle"
                :myFavoriteSongs="desktopLargeLayout2Props.myFavoriteSongs"
              />
              <desktop-large-layout
                :rectangle="desktopLargeLayout3Props.rectangle"
                :myFavoriteSongs="desktopLargeLayout3Props.myFavoriteSongs"
              />
              <desktop-large-layout
                :rectangle="desktopLargeLayout4Props.rectangle"
                :myFavoriteSongs="desktopLargeLayout4Props.myFavoriteSongs"
              />
            </div>
          </div>
          <div class="overlap-group-container">
            <div class="overlap-group10">
              <div class="overlap-group9">
                <img class="rectangle" :src="rectangle1" alt="Rectangle" /><desktop-list-layout
                  :rectangle="desktopListLayout1Props.rectangle"
                  :aboutDamnTime="desktopListLayout1Props.aboutDamnTime"
                  :lizzo="desktopListLayout1Props.lizzo"
                />
                <desktop-list-layout
                  :rectangle="desktopListLayout2Props.rectangle"
                  :aboutDamnTime="desktopListLayout2Props.aboutDamnTime"
                  :lizzo="desktopListLayout2Props.lizzo"
                  :className="desktopListLayout2Props.className"
                />
                <desktop-list-layout
                  :rectangle="desktopListLayout3Props.rectangle"
                  :aboutDamnTime="desktopListLayout3Props.aboutDamnTime"
                  :lizzo="desktopListLayout3Props.lizzo"
                  :className="desktopListLayout3Props.className"
                />
              </div>
              <div class="billboard-top-100">{{ billboardTop100 }}</div>
            </div>
            <div class="overlap-group12">
              <div class="overlap-group11">
                <img class="rectangle" :src="rectangle2" alt="Rectangle" /><desktop-list-layout
                  :rectangle="desktopListLayout4Props.rectangle"
                  :aboutDamnTime="desktopListLayout4Props.aboutDamnTime"
                  :lizzo="desktopListLayout4Props.lizzo"
                  :className="desktopListLayout4Props.className"
                />
                <desktop-list-layout
                  :rectangle="desktopListLayout5Props.rectangle"
                  :aboutDamnTime="desktopListLayout5Props.aboutDamnTime"
                  :lizzo="desktopListLayout5Props.lizzo"
                  :className="desktopListLayout5Props.className"
                />
                <desktop-list-layout
                  :rectangle="desktopListLayout6Props.rectangle"
                  :aboutDamnTime="desktopListLayout6Props.aboutDamnTime"
                  :lizzo="desktopListLayout6Props.lizzo"
                  :className="desktopListLayout6Props.className"
                />
              </div>
              <div class="recently-play">{{ recentlyPlay }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-menu">
        <div class="friend-activity">{{ friendActivity }}</div>
        <div class="address">{{ address }}</div>
        <friend-layout :jasonHarryListenin="friendLayout1Props.jasonHarryListenin" />
        <friend-layout
          :jasonHarryListenin="friendLayout2Props.jasonHarryListenin"
          :className="friendLayout2Props.className"
        />
        <friend-layout
          :jasonHarryListenin="friendLayout3Props.jasonHarryListenin"
          :className="friendLayout3Props.className"
        />
        <friend-layout
          :jasonHarryListenin="friendLayout4Props.jasonHarryListenin"
          :className="friendLayout4Props.className"
        />
        <friend-layout
          :jasonHarryListenin="friendLayout5Props.jasonHarryListenin"
          :className="friendLayout5Props.className"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BrowserDesktop from "./BrowserDesktop";
import SideMenuSelectedCategoryLayout from "./SideMenuSelectedCategoryLayout";
import SideMenuLayout from "./SideMenuLayout";
import SideMenuCategoryLayout from "./SideMenuCategoryLayout";
import DesktopTopNavigation from "./DesktopTopNavigation";
import Searchfiled from "./Searchfiled";
import TopLeftNavigation from "./TopLeftNavigation";
import DesktopTopCard from "./DesktopTopCard";
import DesktopSmallLayout from "./DesktopSmallLayout";
import DesktopSmallLayout2 from "./DesktopSmallLayout2";
import DesktopLargeLayout from "./DesktopLargeLayout";
import DesktopListLayout from "./DesktopListLayout";
import FriendLayout from "./FriendLayout";
export default {
  name: "MediumCopy2",
  components: {
    BrowserDesktop,
    SideMenuSelectedCategoryLayout,
    SideMenuLayout,
    SideMenuCategoryLayout,
    DesktopTopNavigation,
    Searchfiled,
    TopLeftNavigation,
    DesktopTopCard,
    DesktopSmallLayout,
    DesktopSmallLayout2,
    DesktopLargeLayout,
    DesktopListLayout,
    FriendLayout,
  },
  props: [
    "discover",
    "favoriteArtists",
    "line1",
    "recommendedForYou",
    "line2",
    "rectangle1",
    "billboardTop100",
    "rectangle2",
    "recentlyPlay",
    "friendActivity",
    "address",
    "sideMenuSelectedCategoryLayoutProps",
    "sideMenuLayout1Props",
    "sideMenuLayout2Props",
    "sideMenuLayout3Props",
    "sideMenuLayout4Props",
    "sideMenuLayout5Props",
    "sideMenuLayout6Props",
    "sideMenuCategoryLayout1Props",
    "sideMenuLayout7Props",
    "sideMenuLayout8Props",
    "sideMenuLayout9Props",
    "sideMenuLayout10Props",
    "sideMenuCategoryLayout2Props",
    "sideMenuLayout11Props",
    "sideMenuLayout12Props",
    "sideMenuLayout13Props",
    "desktopTopNavigationProps",
    "searchfiledProps",
    "topLeftNavigationProps",
    "desktopTopCardProps",
    "desktopSmallLayout1Props",
    "desktopSmallLayout2Props",
    "desktopSmallLayout3Props",
    "desktopSmallLayout4Props",
    "desktopSmallLayout2Props2",
    "desktopSmallLayout5Props",
    "desktopLargeLayout1Props",
    "desktopLargeLayout2Props",
    "desktopLargeLayout3Props",
    "desktopLargeLayout4Props",
    "desktopListLayout1Props",
    "desktopListLayout2Props",
    "desktopListLayout3Props",
    "desktopListLayout4Props",
    "desktopListLayout5Props",
    "desktopListLayout6Props",
    "friendLayout1Props",
    "friendLayout2Props",
    "friendLayout3Props",
    "friendLayout4Props",
    "friendLayout5Props",
  ],
};
</script>

<style>
.mediumcopy2 {
  align-items: flex-start;
  background-color: #0e1c49;
  display: flex;
  min-width: 1440px;
}

.side-menu {
  align-items: flex-start;
  display: flex;
  height: 1080px;
  min-width: 252px;
}

.overlap-group2 {
  height: 1140px;
  margin-left: -22px;
  margin-top: -38px;
  position: relative;
  width: 275px;
}

.rectangle-1 {
  background-color: #00000033;
  border: 1px solid;
  border-color: #0000004d;
  height: 1082px;
  left: 21px;
  position: absolute;
  top: 37px;
  width: 254px;
}

.path {
  height: 1140px;
  left: 0;
  position: absolute;
  top: 0;
  width: 140px;
}

.library {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 43px;
  min-height: 296px;
  position: absolute;
  top: 94px;
  width: 212px;
}

.library-1 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 42px;
  min-height: 296px;
  position: absolute;
  top: 446px;
  width: 212px;
}

.library-2 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 42px;
  min-height: 296px;
  position: absolute;
  top: 790px;
  width: 212px;
}

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

.right-menu {
  align-items: flex-end;
  background-color: #0000004c;
  display: flex;
  flex-direction: column;
  min-height: 1080px;
  padding: 22px 7px;
  position: relative;
  width: 299px;
}

.friend-activity {
  align-self: flex-start;
  color: var(--white-2);
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-m);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 10px;
  min-height: 20px;
  white-space: nowrap;
}

.address {
  align-self: flex-start;
  color: #ffffff98;
  font-family: var(--font-family-nunito);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 10px;
  white-space: nowrap;
}
</style>
