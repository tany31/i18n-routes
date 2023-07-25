<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useLocale } from '@/stores/locale';

const localeStore = useLocale();
const { t } = localeStore;
</script>

<template>
  <main>
    <div class="base-container">
      <h1>{{ t('catalog') }}</h1>
      <RouterLink :to="{ name: 'product', params: { product: 1 } }">{{ t('product') }} 1</RouterLink>
      <br />
      <RouterLink :to="{ name: 'product', params: { product: 2 } }">{{ t('product') }} 2</RouterLink>
    </div>
  </main>
</template>
