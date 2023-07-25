import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Locale } from '@/types/locales';
import { en, ru } from '@/locales';

const locales: Locale[] = [
  { name: 'Русский', code: 'ru' },
  { name: 'English', code: 'en' }
];

const translations = {
  en,
  ru
};

export const useLocale = defineStore('locale', () => {
  const locale = ref<Locale>(locales[0]);
  const keySet = computed(() => translations[locale.value.code]);

  function setLocale(code: string) {
    const newLocale = locales.find((localeItem) => localeItem.code === code);

    if (newLocale) {
      locale.value = newLocale;
    }
  }

  function t(key: string) {
    return keySet.value[key];
  }

  return {
    locale,
    setLocale,
    locales,
    t
  };
});
