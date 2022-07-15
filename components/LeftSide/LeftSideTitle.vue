<template>
  <div class="left-side__container">
    <h3 class="left-side__title">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.left-side {
  &__container {
    display: inline-block;
    width: 100%;
    max-width: 650px;
    padding: 20px 20px 20px 0;
    border-radius: 0 50px 50px 0;
    background-color: $color-tertiary;
    @include shadow;
  }

  &__title {
    @include font-title-2('desktop');
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: $color-secondary;
    color: $color-primary;
    border-radius: 0 50px 50px 0;
    display: inline-block;
    text-transform: uppercase;
    @include shadow;
    @media (max-width: $xs) {
      @include font-title-2('mobile');
    }
  }
}
</style>
