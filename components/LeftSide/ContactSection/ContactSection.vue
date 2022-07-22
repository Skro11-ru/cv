<template>
  <section class="contacts">
    <LeftSideTitle title="Контакты" />
    <ul class="contacts__list">
      <li class="contacts__item">
        <div class="contacts__icon-wrap">
          <img class="contacts__icon" src="/assets/icon/contacts/phone.svg" alt="icon-phone" />
        </div>
        <a class="contacts__link contacts__phone" :href="`tel:${contact.phone}`">
          {{ contact.phone }}
        </a>
        <button class="contacts__button-show-phone" @click="showPhone">
          <img
            v-if="!isShowPhone"
            class="contacts__icon"
            src="/assets/icon/contacts/visible_on.svg"
            alt="icon-visible"
          />
          <img
            v-else
            class="contacts__icon"
            src="/assets/icon/contacts/visible_off.svg"
            alt="icon-visible"
          />
        </button>
      </li>
      <li class="contacts__item">
        <div class="contacts__icon-wrap">
          <img class="contacts__icon" src="/assets/icon/contacts/mail.svg" alt="icon-mail" />
        </div>
        <a class="contacts__link" :href="`mailto:${contact.mail}`">{{ contact.mail }}</a>
      </li>
      <li class="contacts__item">
        <div class="contacts__icon-wrap">
          <img
            class="contacts__icon"
            src="/assets/icon/contacts/location.svg"
            alt="icon-location"
          />
        </div>
        <a class="contacts__link" href="https://goo.gl/maps/VfAnnHVdovp5Mrxj6" target="_blank">
          {{ contact.address }}
        </a>
      </li>
      <li class="contacts__item">
        <div class="contacts__icon-wrap">
          <img class="contacts__icon" src="/assets/icon/contacts/github.svg" alt="icon-github" />
        </div>
        <a class="contacts__link" :href="contact.github.link" target="_blank">
          {{ contact.github.nickName }}
        </a>
      </li>
      <li class="contacts__item">
        <div class="contacts__icon-wrap">
          <img
            class="contacts__icon"
            src="/assets/icon/contacts/linkedin.svg"
            alt="icon-linkedin"
          />
        </div>
        <a class="contacts__link" :href="contact.linkedIn.link" target="_blank">
          {{ contact.linkedIn.nickName }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useCVStore } from '~/store/store';
import LeftSideTitle from '~/components/LeftSide/LeftSideTitle.vue';

const store = useCVStore();
const contact = computed(() => store.getMyCV.contact);
let isShowPhone = ref(false);

const showPhone = () => {
  isShowPhone.value = !isShowPhone.value;
  if (isShowPhone.value) {
    const firstNumber = 7;
    store.myCV.contact.phone = `+${firstNumber}-${firstNumber + 2}${firstNumber + 2}${
      firstNumber + 2
    }-${firstNumber - 3}${firstNumber + 2}${firstNumber - 2}-${firstNumber - 6}${firstNumber - 5}${
      firstNumber - 4
    }${firstNumber - 3}`;
  } else {
    store.myCV.contact.phone = '+✲-✲✲✲-✲✲✲-✲✲✲✲';
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  &__list {
    padding: 10px;
    @include font-text('desktop');
    @media (max-width: $md) {
      @include font-text('mobile');
    }
  }

  &__item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  &__icon-wrap {
    background-color: $color-primary;
    border-radius: 50%;
    margin: 0 5px 0 0;
  }
  &__icon {
    margin: 3px;
  }

  &__link {
    @include link($color-primary);
  }

  &__phone {
    width: 150px;
  }

  &__button-show-phone {
    width: 30px;
    margin-left: 5px;
    @include transition;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
