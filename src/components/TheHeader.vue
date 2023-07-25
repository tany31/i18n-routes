<script lang="ts" setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { useLocale } from '@/stores/locale';

const localeStore = useLocale();
const { setLocale, locales, t } = localeStore;
const currentLocale = computed(() => localeStore.locale);

const route = useRoute();
const router = useRouter();

function updateLocale(lang: string) {
  setLocale(lang);
  const newRoute = { ...route, params: { ...route.params, lang } };
  router.push(newRoute);
}
</script>

<template>
  <header class="the-header">
    <div class="base-container the-header__wrapper">
      <nav class="the-header__nav">
        <RouterLink class="the-header__nav-link" :to="{ name: 'home' }">{{ t('home') }}</RouterLink>
        <RouterLink class="the-header__nav-link" :to="{ name: 'catalog' }">{{
          t('catalog')
        }}</RouterLink>
      </nav>
      <div>
        <button
          v-for="locale in locales"
          :key="locale.code"
          class="the-header__locale-button"
          :class="{ 'the-header__locale-button--active': currentLocale.code === locale.code }"
          @click="updateLocale(locale.code)"
        >
          {{ locale.name }}
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.the-header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    display: flex;
    gap: 16px;
  }

  .router-link-active {
    color: #00bd7e;
  }

  &__nav-link {
    font-size: 20px;
    text-decoration: none;
    color: #2c3e50;
    transition: 0.2s;

    &:hover {
      color: #00bd7e;
    }
  }

  &__locale-button {
    border: none;
    background: none;
    color: #2c3e50;
    cursor: pointer;
    transition: 0.2s;
    padding: 0 8px;

    &--active,
    &:hover {
      color: #00bd7e;
    }
  }
}
</style>
