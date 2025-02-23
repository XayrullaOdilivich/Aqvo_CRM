import { createRouter, createWebHistory } from 'vue-router'

const isAuthenticated = () => {
  return localStorage.getItem('accessToken') !== null;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      component: () => import('@/components/Analytics.vue')
    },
    {
      path: '/admin/category',
      component: () => import('@/components/Warehouse.vue')
    },

    {
      path: '/admin/shops',
      name: 'shops',
      component: () => import('@/components/Stores.vue')
    },
    {
      path: '/admin/employees',
      name: 'employees',
      component: () => import('@/components/Employees.vue')
    },
    {
      path: '/admin/employees/StaffContinent',
      name: 'employees-staffContinent',
      component: () => import('@/components/StaffContinued.vue')
    },
    {
      path: '/admin/products',
      name: 'products',
      component: () => import('@/components/FinishedProducts.vue')
    },
  ],
})



export default router