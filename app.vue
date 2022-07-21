<template>
  <div class="cv">
    <div class="left-side">
      <LogoSection />
      <ContactSection />
      <SkillsSection />
      <LanguageSection />
    </div>
    <div class="right-side">
      <div class="right-side__header">
        <div class="right-side__text">
          <span class="right-side__title">{{ name }}</span>
          <span class="right-side__subtitle">
            {{ position }}
          </span>
        </div>
        <img class="right-side__logo" src="@/assets/image/photo.png" alt="logo" />
      </div>

      <InformationSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillsSection from '~/components/LeftSide/SkillsSection/SkillsSection.vue';
import LanguageSection from '~/components/LeftSide/LanguageSection/LanguageSection.vue';
import ContactSection from '~/components/LeftSide/ContactSection/ContactSection.vue';
import LogoSection from '~/components/LeftSide/LogoComponent.vue';
import InformationSection from '~/components/RightSide/InformationSection.vue';

import { useCVStore } from '~/store/store';

const store = useCVStore();
const name = computed(() => `${store.getMyCV.name} ${store.getMyCV.surname}`);
const position = computed(() => store.getMyCV.position);
</script>

<style lang="scss" scoped>
.cv {
  border-top: 20px solid $color-tertiary;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 20px 10px rgb(0 0 0 / 50%);
  @media (max-width: $md) {
    border-top: none;
  }
}

.left-side {
  width: 100%;
  max-width: 320px;
  padding-right: 50px;
  background-color: $color-secondary;
  @media (max-width: $md) {
    display: none;
  }
}

.right-side {
  background-color: $color-secondary;
  width: 100%;
  &__header {
    max-width: fit-content;
    margin: 0 auto;
    padding: 20px 0;
    overflow: hidden;

    @media (max-width: $md) {
      display: flex;
      justify-content: space-around;
      max-width: 90%;
    }
    @media (max-width: $sm) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__logo {
    display: none;
    width: 100px;
    border-radius: 50%;
    @include shadow();
    @media (max-width: $md) {
      display: block;
    }
    @media (max-width: $sm) {
      width: 150px;
      order: -1;
      margin-bottom: 7px;
    }
  }
  &__text {
    //width: 100%;
  }
  &__title {
    color: $color-primary;
    text-align: center;
    display: block;
    width: 100%;
    @include font-title-1('desktop');
    @media (max-width: $md) {
      @include font-title-1('mobile');
    }
    @media (max-width: $sm) {
      //font: normal 700 30px/1.2 'Roboto', sans-serif;
      font: normal 700 30px/1.4 'Roboto', sans-serif;
      width: 100%;
    }
  }

  &__subtitle {
    color: $color-primary;
    @include font-title-2('desktop');
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-align: center;
    span {
      margin: 0 15px;
    }
    &:before,
    &:after {
      content: '';
      display: inline-block;
      position: relative;
      vertical-align: middle;
      width: 100%;
      height: 2px;
      background-color: $color-primary;
    }
    &:before {
      margin-left: -100%;
      left: -15px;
    }
    &:after {
      margin-right: -100%;
      left: 15px;
    }
    @media (max-width: $md) {
      @include font-title-2('mobile');
    }
  }
}
:deep() {
  .information {
    @media (max-width: $md) {
      max-width: 90%;
      margin: 0 auto;
      border-radius: 20px 20px 0 0;
    }
  }
}
</style>
