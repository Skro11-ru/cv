<template>
  <section class="language">
    <RightSideTitle
      class="language__title"
      :title="'Знание языков'"
      :path-icon="iconPath('language')"
    />
    <ul class="language__list">
      <li v-for="item in language" :key="item.id" class="language__item">
        <img class="language__flag" :src="iconPath(item.label)" :alt="`${item.label}-flag`" />
        <span class="language__text"> {{ item.name }} - {{ item.level }} </span>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { useCVStore } from '~/store/store';
import RightSideTitle from '~/components/RightSide/RightSideTitle.vue';

const store = useCVStore();
const language = computed(() => store.getMyCV.language);

const iconPath = (nameIcon) => {
  const svgs = import.meta.globEager('/assets/**/*.svg');
  const pathIcon = Object.keys(svgs).filter((item) => item.includes(`${nameIcon}.svg`));
  switch (pathIcon.length) {
    case 0:
      console.error(`Ошибка в получаемом пути файла, проверьте наличие файла с именем ${nameIcon}`);
      return '';
    case 1:
      // @ts-ignore
      return svgs[pathIcon].default;
    default:
      return console.error(
        `Ошибка в получаемом пути файла, проверьте имя ${nameIcon} на уникальность `,
      );
  }
};
</script>

<style lang="scss" scoped>
.language {
  &__title {
    padding: 20px 0;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    padding: 0 25px;
    @include font-text('desktop');
    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }
  &__item {
    color: $color-secondary;
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
}
</style>
