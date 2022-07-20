<template>
  <section class="skills">
    <LeftSideTitle title="Навыки" />
    <ul class="skills__list">
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/html.svg" alt="icon-html" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/css.svg" alt="icon-css" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/sass.svg" alt="icon-sass" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/js.svg" alt="icon-js" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/ts.svg" alt="icon-ts" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/vuejs.svg" alt="icon-vuejs" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/nuxtjs.svg" alt="icon-nuxtjs" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/git.svg" alt="icon-git" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/npm.svg" alt="icon-npm" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/webpack.svg" alt="icon-webpack" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/axios.svg" alt="icon-axios" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/postman.svg" alt="icon-postman" />
      </li>
      <li class="skills__item">
        <img class="skills__icon" src="/assets/icon/skills/figma.svg" alt="icon-figma" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.skills {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    padding: 10px 10px 10px 0;
  }

  &__item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin: 10px;
    }
  }

  &__icon {
    width: 40px;
  }
}
</style>
<script>
import LeftSideTitle from '~/components/LeftSide/LeftSideTitle';
export default {
  components: { LeftSideTitle },
};
</script>
