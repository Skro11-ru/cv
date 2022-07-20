<template>
  <div class="time-line">
    <div class="time-line__date">{{ startDate }}-{{ endDate }}</div>
    <div class="time-line__line"></div>
    <div class="time-line__description">
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  startDate: string;
  endDate: string;
}>();
</script>

<style lang="scss" scoped>
.time-line {
  display: flex;

  &__date {
    max-width: 65px;
    width: 100%;
  }

  &__line {
    //border-right: 5px solid $color-secondary;
    background-color: $color-secondary;
    max-width: 5px;
    width: 100%;
    margin: 0 10px;
    position: relative;
    top: 4px;
    &:before {
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: $color-secondary;
      position: absolute;
      left: -6px;
      top: -1px;
    }
  }

  &__description {
    margin-bottom: 20px;
  }
}

.description {
  &__title {
  }

  &__subtitle {
    margin-bottom: 10px;
  }

  &__text {
  }
}
</style>
