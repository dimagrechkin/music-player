import { RouteComponent, RouteRecordRaw } from 'vue-router';

import appConfig from '@/utils/config';

import NestedRouterLayout from '@/layouts/NestedRouterLayout.vue';

const ProfileIndexView = (): Promise<RouteComponent> => import('./Profiles.vue');
const ProfilePageView = (): Promise<RouteComponent> => import('./ProfilePage.vue');
const CreatePageView = (): Promise<RouteComponent> => import('./CreatePage.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/profiles',
    name: appConfig.routes.profiles.module,
    component: NestedRouterLayout,
    children: [
      {
        path: '',
        name: appConfig.routes.profiles.module,
        component: ProfileIndexView,
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
];
