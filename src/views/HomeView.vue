<script setup lang="ts">
import { useLocale } from '@/stores/locale';

const localeStore = useLocale();
const { t } = localeStore;
</script>

<template>
  <main>
    <div class="base-container">
      <h1>{{ t('home') }}</h1>
    </div>
  </main>
</template>
