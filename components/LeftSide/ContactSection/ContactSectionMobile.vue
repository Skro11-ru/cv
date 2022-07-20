<template>
  <section class="contacts">
    <RightSideTitle class="contacts__title" :title="'Контакты'" :path-icon="iconPath('contacts')" />

    <ul class="contacts__list">
      <li class="contacts__item">
        <img class="contacts__icon" src="/assets/icon/contact/phone.svg" alt="icon-phone" />
        <a class="contacts__link" :href="`tel:${contact.phone}`">{{ contact.phone }} </a>
      </li>
      <li class="contacts__item">
        <img class="contacts__icon" src="/assets/icon/contact/mail.svg" alt="icon-mail" />
        <a class="contacts__link" :href="`mailto:${contact.mail}`">{{ contact.mail }}</a>
      </li>
      <li class="contacts__item">
        <img class="contacts__icon" src="/assets/icon/contact/location.svg" alt="icon-location" />
        <a class="contacts__link" href="https://goo.gl/maps/VfAnnHVdovp5Mrxj6" target="_blank">
          {{ contact.address }}
        </a>
      </li>
      <li class="contacts__item">
        <img class="contacts__icon" src="/assets/icon/contact/github.svg" alt="icon-github" />
        <a class="contacts__link" :href="contact.github.link" target="_blank">
          {{ contact.github.nickName }}
        </a>
      </li>
      <li class="contacts__item">
        <img class="contacts__icon" src="/assets/icon/contact/linkedin.svg" alt="icon-linkedin" />
        <a class="contacts__link" :href="contact.linkedIn.link" target="_blank">
          {{ contact.linkedIn.nickName }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useCVStore } from '~/store/store';
import RightSideTitle from '~/components/RightSide/RightSideTitle.vue';

const store = useCVStore();
const contact = computed(() => store.getMyCV.contact);
const iconPath = (nameIcon) => `./assets/icon/information/${nameIcon}.svg`;
</script>

<style lang="scss" scoped>
.contacts {
  &__title {
    padding: 20px 0;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 0;
    grid-row-gap: 10px;
    padding: 0 25px;
    @include font-text('desktop');
    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }

  &__item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
    }
  }

  &__icon {
    margin-right: 5px;
  }

  &__link {
    @include link($color-secondary);
  }
}
</style>
