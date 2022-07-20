<template>
  <section class="language">
    <LeftSideTitle title="Знание языков" />
    <ul class="language__list">
      <li v-for="item in language" :key="item.id" class="language__item">
        <img
          class="language__flag"
          :src="pathFlagLanguage(item.label)"
          :alt="`${item.label}-flag`"
        />
        <span class="language__text"> {{ item.name }} - {{ item.level }} </span>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { useCVStore } from '~/store/store';
import LeftSideTitle from '~/components/LeftSide/LeftSideTitle.vue';

const store = useCVStore();
const language = computed(() => store.getMyCV.language);
const pathFlagLanguage = (label) => `./assets/icon/language/${label}.svg`;
</script>

<style lang="scss" scoped>
.language {
  &__list {
    padding: 10px;
  }
  &__item {
    color: $color-primary;
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }

  &__flag {
    width: 40px;
    margin-right: 5px;
  }

  &__text {
    @include font-text('desktop');

    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }

  &__list {
    padding: 10px;
    @include font-text('desktop');
    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }
}
</style>
