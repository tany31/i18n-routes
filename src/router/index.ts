import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useLocale } from '@/stores/locale';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/catalog',
    name: 'catalogParent',
    children: [
      {
        path: '',
        name: 'catalog',
        component: () => import('@/views/CatalogView.vue')
      },
      {
        path: ':product',
        name: 'product',
        component: () => import('@/views/ProductView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundView.vue')
  }
];

function localePath(path: String) {
  return `/:lang(\\en|ru)?${path}`;
}

function generateLocaleRoutes(routes: RouteRecordRaw[]) {
  return routes.map((routeItem) => {
    return {
      ...routeItem,
      path: localePath(routeItem.path)
    };
  });
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generateLocaleRoutes(routes)
});

router.beforeEach(async (to, from, next) => {
  const localeStore = useLocale();
  const { locale } = localeStore;
  const { params } = to;

  if (!params.lang) {
    const nextRoute = { name: to.name as string, params: { ...params, lang: locale.code } };
    return next(nextRoute);
  }

  next();
});

export default router;
