import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { routes as profileModuleRoutes } from '@/components/router';

export const routes: Array<RouteRecordRaw> = [
  ...profileModuleRoutes,
  // default path
  // will be used to redirect to relevant permitted route
  // after user logged in
  {
    path: '/',
    redirect: '',
    name: 'base-path',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
