import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: 'cart',
        name: 'CartView',
        component: () => import('../views/CartView.vue'),
        children: [
          {
            path: '',
            name: 'CartItemsView',
            component: () => import('../views/CartItemsView.vue'),
          },
        ],
      },
      {
        path: '',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'categories/:name-:id(\\d+)',
        name: 'CategoryView',
        component: () => import('../views/CategoryView.vue'),
      },
      {
        path: 'user',
        name: 'UserView',
        component: () => import('../views/UserView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
