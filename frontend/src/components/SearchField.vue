<template>
  <div class="clearable-input">
    <span data-clear-input><icon name="Search" /></span>
    <input type="search" placeholder="Search" />
  </div>
</template>

<style>
.clearable-input {
  position: relative;
  display: inline-block;
}

.clearable-input > input {
  padding-left: 2em;
  padding-right: 1em;
  width: 100%;
  color: var(--white-4);
  background-color: var(--white-3);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  width: 550px;
  height: 32px;
}

.clearable-input > [data-clear-input] {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4em 0.4em;
  cursor: pointer;
}
</style>
