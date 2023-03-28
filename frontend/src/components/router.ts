import { RouteComponent, RouteRecordRaw } from 'vue-router';

import appConfig from '@/utils/config';

import NestedRouterLayout from '@/layouts/NestedRouterLayout.vue';

const HomePageIndexView = (): Promise<RouteComponent> => import('./HomePage.vue');
const ProfilePageView = (): Promise<RouteComponent> => import('./ProfilePage.vue');
const CreatePageView = (): Promise<RouteComponent> => import('@/components/CreatePage.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/profiles',
    name: appConfig.routes.profiles.module,
    component: NestedRouterLayout,
    children: [
      {
        path: '',
        name: appConfig.routes.profiles.moduleIndex,
        component: HomePageIndexView,
      },
      {
        path: ':profileId/profile',
        name: appConfig.routes.profiles.index,
        component: NestedRouterLayout,
        meta: {
          title: 'Module',
        },
        children: [
          {
            path: '',
            name: appConfig.routes.profiles.singleIndex,
            component: ProfilePageView,
            meta: {
              title: 'Module',
            },
          },
        ],
      },
      {
        path: 'create',
        name: appConfig.routes.profiles.create,
        component: CreatePageView,
        meta: {
          title: 'Create',
        },
      },
    ],
  },
  {
    path: '/create',
    name: appConfig.routes.create,
    component: CreatePageView,
    meta: {
      title: 'Create',
    },
  },
];
