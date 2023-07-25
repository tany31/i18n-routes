<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useLocale } from '@/stores/locale';

const route = useRoute();
const localeStore = useLocale();
const { t } = localeStore;
</script>

<template>
  <main>
    <div class="base-container">
      <h1>
        {{ t('product') }} {{ route.params.product }}
      </h1>
    </div>
  </main>
</template>