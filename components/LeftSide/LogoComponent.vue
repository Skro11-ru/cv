<template>
  <div class="logo">
    <img class="logo__image" src="@/assets/image/photo.jpg" alt="logo" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  height: 300px;
  width: 250px;
  background-color: $color-tertiary;
  border-radius: 0 0 200px 200px;
  display: flex;
  align-items: flex-end;
  padding: 28px;
  margin-left: auto;
  margin-bottom: 50px;
  box-shadow: 8px 8px 7px rgb(0 0 0 / 50%);
  &__image {
    border-radius: 50%;
  }
}
</style>
