import { type Locale } from '@/types/locales';

const locales: Locale[] = [
  { name: 'Русский', code: 'ru' },
  { name: 'English', code: 'en' }
];

export const useLocale = () => {
  return {
    locales
  };
};
