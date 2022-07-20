<template>
  <div class="left-side-title">
    <h3 class="left-side-title__text">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.left-side-title {
  display: inline-block;
  width: 100%;
  max-width: 350px;
  padding: 15px 15px 15px 0;
  border-radius: 0 50px 50px 0;
  background-color: $color-tertiary;
  @include shadow;

  &__text {
    @include font-title-3('desktop');
    width: 100%;
    padding: 5px 0;
    text-align: center;
    background-color: $color-secondary;
    color: $color-primary;
    border-radius: 0 50px 50px 0;
    display: inline-block;
    text-transform: uppercase;
    @include shadow;
    @media (max-width: $md) {
      @include font-title-3('mobile');
    }
  }
}
</style>
