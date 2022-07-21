<template>
  <section class="information">
    <RightSideTitle
      class="information__title"
      :title="'Обо мне'"
      :path-icon="iconPath('profile')"
    />
    <section class="information-section">
      <p class="information__text" v-for="item in aboutMe">{{ item }}</p>
    </section>
    <ContactSectionMobile class="section-mobile" />
    <SkillsSectionMobile class="section-mobile" />
    <RightSideTitle
      class="information__title"
      :title="'Образование'"
      :path-icon="iconPath('education')"
    />
    <section class="information-section">
      <ul class="information-section__list">
        <li v-for="item in educationList" :key="item.id" class="information-section__item">
          <TimeLine :start-date="item.startDate" :end-date="item.endDate">
            <template v-slot:title>
              <h4 class="information-section__title">{{ item.educationalInstitution }}</h4>
            </template>
            <template v-slot:subtitle>
              <h5 class="information-section__subtitle">{{ item.specialty }}</h5>
            </template>
          </TimeLine>
        </li>
      </ul>
    </section>
    <RightSideTitle
      class="information__title"
      :title="'Опыт работы'"
      :path-icon="iconPath('work')"
    />
    <section class="information-section">
      <ul class="information-section__list">
        <li class="information-section__item" v-for="item in workExperienceList" :key="item.id">
          <TimeLine :start-date="item.startDate" :end-date="item.endDate">
            <template v-slot:title>
              <h4 class="information-section__title">{{ item.companyName }}</h4>
            </template>
            <template v-slot:subtitle>
              <h5 class="information-section__subtitle">{{ item.position }}</h5>
            </template>
            <div class="information-section__description">
              <div v-if="!!item.project.length" class="information-section__project">
                <h5 class="information-section__subtitle">Проект:</h5>
                <p class="information-section__text">{{ item.project }}</p>
              </div>

              <div v-if="!!item.technologyStack.length" class="information-section__tech-stack">
                <h5 class="information-section__subtitle">Стек:</h5>
                <p class="information-section__text">
                  {{ item.technologyStack.join(', ') }}
                </p>
              </div>
              <div class="information-section__functions">
                <h5 class="information-section__subtitle">Полномочия и обязанности:</h5>
                <ul class="information-section__functions-list">
                  <li
                    v-for="itemFunction in item.functions"
                    class="information-section__functions-item"
                  >
                    <p class="information-sectidon__text">{{ itemFunction }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </TimeLine>
        </li>
      </ul>
    </section>
    <LanguageSectionMobile class="section-mobile" />
  </section>
</template>

<script setup lang="ts">
import TimeLine from '~/components/TimeLine.vue';

import { useCVStore } from '~/store/store';
import RightSideTitle from '~/components/RightSide/RightSideTitle.vue';
import ContactSectionMobile from '~/components/LeftSide/ContactSection/ContactSectionMobile.vue';
import SkillsSectionMobile from '~/components/LeftSide/SkillsSection/SkillsSectionMobile.vue';
import LanguageSectionMobile from '~/components/LeftSide/LanguageSection/LanguageSectionMobile.vue';
import iconPath from '~/helpers/iconPath.js';

const store = useCVStore();
const educationList = store.getMyEducationList;
const workExperienceList = store.getMyWorkExperienceList;
const aboutMe = store.getAboutMe;
</script>

<style lang="scss" scoped>
.section-mobile {
  display: none;
  @media (max-width: $md) {
    display: block;
  }
}
.information {
  background-color: $color-primary;
  padding: 20px 0;
  border-radius: 20px 0 0 0;
  @include font-text('desktop');
  &__title {
    padding: 20px 0;
  }

  &__text {
    @include font-text('desktop');
    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }
}

.information-section {
  padding: 0 25px;
  text-align: justify;
  &__list {
  }

  &__item {
  }

  &__title {
  }

  &__subtitle {
    @include font-title-5('desktop');
    @media (max-width: $md) {
      @include font-title-5('mobile');
    }
  }

  &__description {
    margin-top: 10px;
    div {
      margin-bottom: 10px;
    }
  }

  &__project {
  }

  &__text {
    @include font-text('desktop');
    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }

  &__tech-stack {
  }

  &__functions {
  }

  &__functions-list {
  }

  &__functions-item {
  }
}

.information-sectidon {
  &__text {
  }
}
</style>
