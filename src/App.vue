<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useLocale } from '@/stores/locale';
import TheHeader from '@/components/TheHeader.vue'

const localeStore = useLocale();
const route = useRoute();
const { setLocale, locale } = localeStore;

onBeforeMount(async () => {
  if (locale.code !== route.params.lang) {
    await setLocale(route.params.lang as string);
  }
});
</script>

<template>
  <TheHeader />
  <RouterView />
</template>
