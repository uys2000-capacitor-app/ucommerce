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
      },
      {
        path: '',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'categories/:category-:categoryid(\\d+)',
        name: 'CategoryView',
        component: () => import('../views/CategoryView.vue'),
      },
      {
        path: 'categories/:category-:categoryid(\\d+)/:subcategory-:subcategoryid(\\d+)',
        name: 'SubCategoryView',
        component: () => import('../views/CategoryView.vue'),
      },
      {
        path: 'user',
        name: 'UserView',
        component: () => import('../views/UserView.vue'),
      },
      {
        path: 'user/sign',
        name: 'SignView',
        component: () => import('../views/SignView.vue'),
      },
      {
        path: 'user/orders',
        name: 'OrdersView',
        component: () => import('../views/OrdersView.vue'),
      },
      {
        path: 'user/address',
        name: 'UserAddressesView',
        component: () => import('../views/UserAddressesView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
