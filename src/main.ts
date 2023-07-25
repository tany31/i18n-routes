import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// Подождать готовности роутера для возможности использовать в App.vue
router.isReady().then(() => {
  app.mount('#app');
});
