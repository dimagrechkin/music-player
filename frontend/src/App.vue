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
          <div class="library">
            <side-menu-selected-category-layout
              :overlapGroup="mockedData.sideMenuSelectedCategoryLayoutProps.overlapGroup"
              :base="mockedData.sideMenuSelectedCategoryLayoutProps.base"
              :homeFill="mockedData.sideMenuSelectedCategoryLayoutProps.homeFill"
              :menu="mockedData.sideMenuSelectedCategoryLayoutProps.menu"
            />
            <side-menu-layout :listItem="mockedData.sideMenuLayout1Props.search2"  />
           
          </div>
        </div>
      </div>
      <div class="flex-col">
        <div class="top-navigation">
          <desktop-top-navigation/>
          <searchfiled :search1="mockedData.searchfiledProps.search1" :search2="mockedData.searchfiledProps.search2" />
          <top-left-navigation
            :bellFill="mockedData.topLeftNavigationProps.bellFill"
            :sourasith="mockedData.topLeftNavigationProps.sourasith"
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
              <desktop-small-layout
                :imageArtistsDojaCat="mockedData.desktopSmallLayout1Props.imageArtistsDojaCat"
                :dojaCat="mockedData.desktopSmallLayout1Props.dojaCat"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="mockedData.desktopSmallLayout2Props.imageArtistsDojaCat"
                :dojaCat="mockedData.desktopSmallLayout2Props.dojaCat"
                :className="mockedData.desktopSmallLayout2Props.className"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="mockedData.desktopSmallLayout3Props.imageArtistsDojaCat"
                :dojaCat="mockedData.desktopSmallLayout3Props.dojaCat"
                :className="mockedData.desktopSmallLayout3Props.className"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="mockedData.desktopSmallLayout4Props.imageArtistsDojaCat"
                :dojaCat="mockedData.desktopSmallLayout4Props.dojaCat"
                :className="mockedData.desktopSmallLayout4Props.className"
              />
              <desktop-small-layout2
                :rectangle="mockedData.desktopSmallLayout2Props2.rectangle"
                :imageArtistsDojaCat="mockedData.desktopSmallLayout2Props2.imageArtistsDojaCat"
                :dojaCat="mockedData.desktopSmallLayout2Props2.dojaCat"
              />
              <desktop-small-layout
                :imageArtistsDojaCat="mockedData.desktopSmallLayout5Props.imageArtistsDojaCat"
                :dojaCat="mockedData.desktopSmallLayout5Props.dojaCat"
                :className="mockedData.desktopSmallLayout5Props.className"
              />
            </div>
          </div>
          <div class="recommended-for-you">
            <div class="recommended-for-you-1">{{ mockedData.recommendedForYou }}</div>
            <img class="line" :src="mockedData.line2" alt="Line" />
            <div class="desktoplargelayout-container">
              <desktop-large-layout
                :rectangle="mockedData.desktopLargeLayout1Props.rectangle"
                :myFavoriteSongs="mockedData.desktopLargeLayout1Props.myFavoriteSongs"
              />
              <desktop-large-layout
                :rectangle="mockedData.desktopLargeLayout2Props.rectangle"
                :myFavoriteSongs="mockedData.desktopLargeLayout2Props.myFavoriteSongs"
              />
              <desktop-large-layout
                :rectangle="mockedData.desktopLargeLayout3Props.rectangle"
                :myFavoriteSongs="mockedData.desktopLargeLayout3Props.myFavoriteSongs"
              />
              <desktop-large-layout
                :rectangle="mockedData.desktopLargeLayout4Props.rectangle"
                :myFavoriteSongs="mockedData.desktopLargeLayout4Props.myFavoriteSongs"
              />
            </div>
          </div>
          <div class="overlap-group-container">
            <div class="overlap-group10">
              <div class="overlap-group9">
                <img class="rectangle" :src="mockedData.rectangle1" alt="Rectangle" /><desktop-list-layout
                  :rectangle="mockedData.desktopListLayout1Props.rectangle"
                  :aboutDamnTime="mockedData.desktopListLayout1Props.aboutDamnTime"
                  :lizzo="mockedData.desktopListLayout1Props.lizzo"
                />
                <desktop-list-layout
                  :rectangle="mockedData.desktopListLayout2Props.rectangle"
                  :aboutDamnTime="mockedData.desktopListLayout2Props.aboutDamnTime"
                  :lizzo="mockedData.desktopListLayout2Props.lizzo"
                  :className="mockedData.desktopListLayout2Props.className"
                />
                <desktop-list-layout
                  :rectangle="mockedData.desktopListLayout3Props.rectangle"
                  :aboutDamnTime="mockedData.desktopListLayout3Props.aboutDamnTime"
                  :lizzo="mockedData.desktopListLayout3Props.lizzo"
                  :className="mockedData.desktopListLayout3Props.className"
                />
              </div>
              <div class="billboard-top-100">{{ mockedData.billboardTop100 }}</div>
            </div>
            <div class="overlap-group12">
              <div class="overlap-group11">
                <img class="rectangle" :src="mockedData.rectangle2" alt="Rectangle" /><desktop-list-layout
                  :rectangle="mockedData.desktopListLayout4Props.rectangle"
                  :aboutDamnTime="mockedData.desktopListLayout4Props.aboutDamnTime"
                  :lizzo="mockedData.desktopListLayout4Props.lizzo"
                  :className="mockedData.desktopListLayout4Props.className"
                />
                <desktop-list-layout
                  :rectangle="mockedData.desktopListLayout5Props.rectangle"
                  :aboutDamnTime="mockedData.desktopListLayout5Props.aboutDamnTime"
                  :lizzo="mockedData.desktopListLayout5Props.lizzo"
                  :className="mockedData.desktopListLayout5Props.className"
                />
                <desktop-list-layout
                  :rectangle="mockedData.desktopListLayout6Props.rectangle"
                  :aboutDamnTime="mockedData.desktopListLayout6Props.aboutDamnTime"
                  :lizzo="mockedData.desktopListLayout6Props.lizzo"
                  :className="mockedData.desktopListLayout6Props.className"
                />
              </div>
              <div class="recently-play">{{ mockedData.recentlyPlay }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-menu">
        <div class="friend-activity">{{ mockedData.friendActivity }}</div>
        <div class="address">{{ mockedData.address }}</div>
        <friend-layout :activity="mockedData.friendLayout1Props.activity" />
        <friend-layout
          :activity="mockedData.friendLayout2Props.activity"
          :selected="false"
        />
        <friend-layout
          :activity="mockedData.friendLayout3Props.activity"
          :selected="false"
        />
        <friend-layout
          :activity="mockedData.friendLayout4Props.activity"
          :selected="false"
        />
        <friend-layout
          :activity="mockedData.friendLayout5Props.activity"
          :selected="false"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import AppHeader from './components/Header.vue';
import { useRefreshMutation } from './graphql/generated';
import { isTokenExpire } from './lib/auth/helpers';
import { useCryptoStore } from './stores/crypto';

import SideMenuSelectedCategoryLayout from '@/components/SideMenuSelectedCategoryLayout.vue';
import SideMenuLayout from "@/components/SideMenuLayout.vue";
import SideMenuCategoryLayout from "@/components/SideMenuCategoryLayout.vue";
import DesktopTopNavigation from "@/components/DesktopTopNavigation.vue";
import Searchfiled from "@/components/Searchfiled.vue";
import TopLeftNavigation from "@/components/TopLeftNavigation.vue";
import LoginCard from "@/components/LoginCard.vue";
import DesktopSmallLayout from "@/components/DesktopSmallLayout.vue";
import DesktopSmallLayout2 from "@/components/DesktopSmallLayout2.vue";
import DesktopLargeLayout from "@/components/DesktopLargeLayout.vue";
import DesktopListLayout from "@/components/DesktopListLayout.vue";
import FriendLayout from "@/components/FriendLayout.vue";

import ArrowLeft from '@element-plus/icons-vue'

const sideMenuSelectedCategoryLayoutData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-glow-D962C687-6574-4AC4-AFF5-9A26C981BBB9@2x.png",
    base: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-base-5CD7838B-B0F5-431F-AB08-027DA86FDFED@2x.png",
    homeFill: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-home-fill-C655F145-3F87-46D5-BC47-1B8F9936DDB7@2x.png",
    menu: "Menu",
};

 const sideMenuLayout1Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-E0EA35DC-64C7-4784-951A-C5BD528C45D3@2x.png",
    search2: "Profiles",
};

 const sideMenuLayout2Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-FB05319E-9C5D-45DD-88A8-2C92E4ACF209@2x.png",
    search2: "Search",
    className: "side-menu-layout-1",
};

 const sideMenuLayout3Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-F9DD6F7D-020B-4B1E-909A-043EE0025C76@2x.png",
    search2: "Library",
    className: "side-menu-layout-2",
};

 const sideMenuLayout4Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-ud83cudfa8-icon-u0421olor-072615C4-DBDD-4712-8A16-EFD1ABF4387F@2x.png",
    search2: "Radio",
    className: "side-menu-layout",
};

 const sideMenuLayout5Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-5054E8D4-299F-4608-A7CA-7C690A9929B5@2x.png",
    search2: "Music Video",
    className: "side-menu-layout-3",
};

 const sideMenuLayout6Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-26831677-8213-46D4-9586-B6712BFD9E36@2x.png",
    search2: "Podcasts",
    className: "side-menu-layout-4",
};

 const sideMenuCategoryLayout1Data = {
    gridFill: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-grid-fill-C1CCB0A3-F7BF-4CE2-B7E4-52889DB719CC@2x.png",
    library: "Library",
};

 const sideMenuLayout7Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-E0EA35DC-64C7-4784-951A-C5BD528C45D3@2x.png",
    search2: "Recently Played",
    className: "side-menu-layout-5",
};

 const sideMenuLayout8Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-F1C3AA18-90F2-4DBB-A333-FCACB2A031DD@2x.png",
    search2: "Favorite Songs",
    className: "side-menu-layout-6",
};

 const sideMenuLayout9Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-99672BE3-2A3F-4FC5-96AC-1E8D551BD1D2@2x.png",
    search2: "Album",
    className: "side-menu-layout-7",
};

 const sideMenuLayout10Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-1E4E0B1E-D84F-4982-A7AA-CA23EC127CE7@2x.png",
    search2: "Artists",
    className: "side-menu-layout-8",
};

 const sideMenuCategoryLayout2Data = {
    gridFill: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-grid-fill-EFB16B5F-B95E-4601-AB82-2CCB2CFEAD62@2x.png",
    library: "Playlist",
    className: "side-menu-category-layout-1",
};

 const sideMenuLayout11Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-F1C3AA18-90F2-4DBB-A333-FCACB2A031DD@2x.png",
    search2: "My favorite Songs",
    className: "side-menu-layout-9",
};

 const sideMenuLayout12Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-BFED4662-3EC0-4AA9-86FC-7B1B8C81E70F@2x.png",
    search2: "Music of Summer",
    className: "side-menu-layout-10",
};

 const sideMenuLayout13Data = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-C7480C30-F5D3-4B08-ABA4-563301386A97@2x.png",
    search2: "Today's Top Hits",
    className: "side-menu-layout-11",
};

 const desktopTopNavigationData = {
    arrowIosLeft: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-arrow-ios-left-120A7D19-4F2F-466C-A145-DA844A84B533@2x.png",
    arrowIosRight: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-arrow-ios-right-9F45EBF8-1560-44E3-84FE-DCA632BE8F97@2x.png",
};

 const searchfiledData = {
    search1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-search-3A00FBAF-C471-4851-858A-C026748EAC1A@2x.png",
    search2: "Search",
};

 const topLeftNavigationData = {
    bellFill: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-bell-fill-449A5C16-C4AA-48B1-95FE-B285B1A4EAAB@2x.png",
    sourasith: "Sourasith",
    arrowIosDown: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-arrow-ios-down-DA3AFEE8-3178-499F-8D3B-241EDEAF6829@2x.png",
};

 const desktopTopCardData = {
    title: "Use Lens Protocol wtih your friends",
    subTitle: "Connect Metamask and login to your Lens profile or Create Lens Profile",
    firstButtonText: "Connect Metamask",
    secondButtonText: "Login Lens",
};

 const desktopSmallLayout1Data = {
    imageArtistsDojaCat: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-CED7926C-8A72-4817-8642-CBC85B26418C@2x.png",
    dojaCat: "Doja Cat",
};

 const desktopSmallLayout2Data = {
    imageArtistsDojaCat: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-41912DF5-F17E-484A-9E8A-38E82E897321@2x.png",
    dojaCat: "DuaLipa",
    className: "desktop-small-layout-2",
};

 const desktopSmallLayout3Data = {
    imageArtistsDojaCat: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-3278181B-68CA-4B98-B6E4-AD24A7D72165@2x.png",
    dojaCat: "Ava Max",
    className: "desktop-small-layout-3",
};

 const desktopSmallLayout4Data = {
    imageArtistsDojaCat: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-5BFEA9A1-7B18-4F30-8938-1F99D4909E6D@2x.png",
    dojaCat: "Lizzo",
    className: "desktop-small-layout-4",
};

 const desktopSmallLayout22Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-2E0740BA-360D-4D43-8F8B-7F1D35B978B0@2x.png",
    imageArtistsDojaCat: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-59E4A973-77B6-4B0C-AFD8-C1D0B91C2F9C@2x.png",
    dojaCat: "Miley Cyrus",
};

 const desktopSmallLayout5Data = {
    imageArtistsDojaCat: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-8CD2AC6F-8992-41E2-959E-6255886E4E79@2x.png",
    dojaCat: "Shakira",
    className: "desktop-small-layout",
};

 const desktopLargeLayout1Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-5D551739-2EDA-45ED-BD31-6A69DA747F1C.jpg",
    myFavoriteSongs: "My Favorite Songs",
};

 const desktopLargeLayout2Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-89F6B86F-F057-4B8E-9ACF-8AF65D7A8EA9.jpg",
    myFavoriteSongs: "Relaxing Songs",
};

 const desktopLargeLayout3Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-5EA01704-7914-4B06-AC3F-93083CDD5187.jpg",
    myFavoriteSongs: "Music of Summer",
};

 const desktopLargeLayout4Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-84DAFFB5-2EFC-44D4-BAB7-4FADD5E582F7.jpg",
    myFavoriteSongs: "top 100 Global",
};

 const desktopListLayout1Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-D933DC77-D486-4F0A-8F46-54A1031377F2.jpg",
    aboutDamnTime: "Flowers",
    lizzo: "Miley Cyrus",
};

 const desktopListLayout2Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-1CA82D8C-DD3D-4A82-8D64-BF4A20C64E01.jpg",
    aboutDamnTime: "Kill Bill",
    lizzo: "SZA",
    className: "desktop-list-layout-1",
};

 const desktopListLayout3Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-47CFEC30-DD4D-499D-8D9A-1F4CF1EE01D0.jpg",
    aboutDamnTime: "Anti-Hero",
    lizzo: "Taylor Swift",
    className: "desktop-list-layout-2",
};

 const desktopListLayout4Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-5B9634D7-E2AE-45CA-BF3B-DAFEDBD95E4C.jpg",
    aboutDamnTime: "Woman",
    lizzo: "Doja Cat",
    className: "desktop-list-layout",
};

 const desktopListLayout5Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-1B30CE58-C35C-4A59-A87D-C6AC64976BBA.jpg",
    aboutDamnTime: "As It Was",
    lizzo: "Harry Styles",
    className: "desktop-list-layout-3",
};

 const desktopListLayout6Data = {
    rectangle: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-6BFB3FBC-19A4-4E0A-B3C5-7C694529E745.jpg",
    aboutDamnTime: "About Damn Time",
    lizzo: "Lizzo",
    className: "desktop-list-layout-4",
};

 const friendLayout1Data = {
  activity: "Jason Harry<br />Listening to Stitches <br />Shawn Mendes",
};

   const friendLayout2Data = {
    activity: "Jasmine Tetrault<br />Listening to Flowers<br />Miley Cyrus",
    className: "friend-layout-1",
};

 const friendLayout3Data = {
  activity: "Chantal Lemay<br />Listening to Ghost <br />Ava Max",
    className: "friend-layout-2",
};

 const friendLayout4Data = {
  activity: "Jimmy Young<br />Listening to Stitches <br />Shawn Mendes",
    className: "friend-layout-3",
};

 const friendLayout5Data = {
  activity: "Katina Banoudy<br />Listening to Flower <br />Miley Cyrus",
    className: "friend-layout-4",
};

const mockedData = {
    discover: "Discover",
    favoriteArtists: "Favorite Profiles",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-line-BEFCA296-DEA4-4F9F-BAC4-137E18CEC833.png",
    recommendedForYou: "Recommended for you",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-line-BEFCA296-DEA4-4F9F-BAC4-137E18CEC833.png",
    rectangle1: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-0EF56B5E-A934-409A-BE30-153C0D7635A8.png",
    billboardTop100: "Billboard Top 100",
    rectangle2: "https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-0EF56B5E-A934-409A-BE30-153C0D7635A8.png",
    recentlyPlay: "Recently Play",
    friendActivity: "Friend Activity",
    address: "320 Friends",
    sideMenuSelectedCategoryLayoutProps: sideMenuSelectedCategoryLayoutData,
    sideMenuLayout1Props: sideMenuLayout1Data,
    sideMenuLayout2Props: sideMenuLayout2Data,
    sideMenuLayout3Props: sideMenuLayout3Data,
    sideMenuLayout4Props: sideMenuLayout4Data,
    sideMenuLayout5Props: sideMenuLayout5Data,
    sideMenuLayout6Props: sideMenuLayout6Data,
    sideMenuCategoryLayout1Props: sideMenuCategoryLayout1Data,
    sideMenuLayout7Props: sideMenuLayout7Data,
    sideMenuLayout8Props: sideMenuLayout8Data,
    sideMenuLayout9Props: sideMenuLayout9Data,
    sideMenuLayout10Props: sideMenuLayout10Data,
    sideMenuCategoryLayout2Props: sideMenuCategoryLayout2Data,
    sideMenuLayout11Props: sideMenuLayout11Data,
    sideMenuLayout12Props: sideMenuLayout12Data,
    sideMenuLayout13Props: sideMenuLayout13Data,
    desktopTopNavigationProps: desktopTopNavigationData,
    searchfiledProps: searchfiledData,
    topLeftNavigationProps: topLeftNavigationData,
    desktopTopCardProps: desktopTopCardData,
    desktopSmallLayout1Props: desktopSmallLayout1Data,
    desktopSmallLayout2Props: desktopSmallLayout2Data,
    desktopSmallLayout3Props: desktopSmallLayout3Data,
    desktopSmallLayout4Props: desktopSmallLayout4Data,
    desktopSmallLayout2Props2: desktopSmallLayout22Data,
    desktopSmallLayout5Props: desktopSmallLayout5Data,
    desktopLargeLayout1Props: desktopLargeLayout1Data,
    desktopLargeLayout2Props: desktopLargeLayout2Data,
    desktopLargeLayout3Props: desktopLargeLayout3Data,
    desktopLargeLayout4Props: desktopLargeLayout4Data,
    desktopListLayout1Props: desktopListLayout1Data,
    desktopListLayout2Props: desktopListLayout2Data,
    desktopListLayout3Props: desktopListLayout3Data,
    desktopListLayout4Props: desktopListLayout4Data,
    desktopListLayout5Props: desktopListLayout5Data,
    desktopListLayout6Props: desktopListLayout6Data,
    friendLayout1Props: friendLayout1Data,
    friendLayout2Props: friendLayout2Data,
    friendLayout3Props: friendLayout3Data,
    friendLayout4Props: friendLayout4Data,
    friendLayout5Props: friendLayout5Data,
};

onMounted(() => {
  refreshAccessToken();
});

const store = useCryptoStore();

const isLoggedIn = computed(()=> !!store.account)

const { mutate: getToken } = useRefreshMutation();

const refreshAccessToken = async () => {
  const currentRefreshToken = store.readAccessToken.refreshToken;

  if (!store.readAccessToken) return null;
  if (isTokenExpire(store.readAccessToken.exp)) {
    const result = await getToken({
      request: {
        refreshToken: currentRefreshToken,
      },
    });

    const { accessToken, refreshToken: newRefreshToken } = result?.data?.refresh;

    store.setAccessToken(accessToken, newRefreshToken);

    return accessToken as string;
  }
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  background: black;
}

.body {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.postsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
}


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
