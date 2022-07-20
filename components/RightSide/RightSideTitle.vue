<template>
  <div class="right-side-title">
    <div class="right-side__icon-wrap">
      <img class="right-side__icon" :src="`${pathIcon}`" alt="icon-title" />
    </div>
    <h3 class="right-side__text">{{ titleUppercase }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pathIcon: String,
  title: String,
});

const titleUppercase = computed(() => props.title.toUpperCase());
</script>

<style lang="scss" scoped>
.right-side-title {
  display: flex;
  align-items: center;
}

.right-side {
  &__icon-wrap {
    padding: 5px 20px;
    background-color: $color-secondary;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  &__icon {
    height: 40px;
    width: 40px;
  }

  &__text {
    width: 100%;
    text-align: center;
    margin-bottom: 22px;
    border-bottom: 5px solid $color-secondary;
    position: relative;
    left: -1px;
    @include font-title-3('desktop');
    @media (max-width: $md) {
      @include font-title-3('mobile');
    }
  }
}
</style>
