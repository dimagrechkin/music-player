import { createRouter, createWebHistory, RouteRecordRaw, RouteComponent } from 'vue-router';

import { routes as profileModuleRoutes } from '@/components/router';

const HomePageIndexView = (): Promise<RouteComponent> => import('@/components/HomePage.vue');

export const routes: Array<RouteRecordRaw> = [
  ...profileModuleRoutes,
  // default path
  // will be used to redirect to relevant permitted route
  // after user logged in
  {
    path: '/',
    name: 'base-path',
    component: HomePageIndexView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
