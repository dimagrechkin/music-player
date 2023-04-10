<template>
  <div class="dropdown">
    <img
      class="oval-3"
      src="https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-oval-A237993F-5DE2-44FD-9B67-DCDC50E9E005@2x.png"
      alt="Oval"
    />
    <div class="profile-name nunito-normal-white-11px">
      {{ profileName }}
    </div>
    <icon class="arrow-ios-down" name="arrowDown" />
    <div class="dropdown-content">
      <p>Log Out</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  profileName: string;
}
defineProps<Props>();
</script>
<style>
.dropdown {
  display: flex;
  align-items: center;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 80px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
x .dropdown:hover .dropdown {
  display: block;
}

.account {
  align-items: center;
  background-color: var(--white-3);
  border-radius: 16px;
  display: flex;
  min-width: 162px;
}

.oval-3 {
  height: 32px;
  width: 32px;
}

.profile-name {
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 15px;
  min-height: 20px;
  min-width: 66px;
  white-space: nowrap;
}

.arrow-ios-down {
  background-size: 100% 100%;
  height: 7px;
  margin-left: 16px;
  margin-top: 3px;
  width: 14px;
}
</style>
