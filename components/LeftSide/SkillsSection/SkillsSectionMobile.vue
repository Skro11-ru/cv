<template>
  <section class="skills">
    <RightSideTitle class="skills__title" :title="'Навыки'" :path-icon="iconPath('skill')" />
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

<script setup lang="ts">
import RightSideTitle from '~/components/RightSide/RightSideTitle.vue';
import iconPath from '~/helpers/iconPath';
</script>

<style lang="scss" scoped>
.skills {
  &__title {
    padding: 20px 0;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
    grid-column-gap: 0;
    grid-row-gap: 10px;
    padding: 0 25px;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__icon {
    width: 40px;
  }
}
</style>
