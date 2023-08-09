import { createRouter, createWebHistory } from 'vue-router'

import UserInfo from '@/pages/UserInfo.vue'
import EditUserInfo from '@/pages/EditUserInfo.vue'

const routes = [
  {
    path: '/',
    component: UserInfo,
    name: 'Информация о пользователе'
  },
  {
    path: '/edit-user-info',
    component: EditUserInfo,
    name: 'Редактировать иноформацию о пользователе'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router