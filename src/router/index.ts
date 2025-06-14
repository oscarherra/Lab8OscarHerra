import { createRouter, createWebHistory } from 'vue-router'
import ProyectosView from '@/views/ProyectosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../layouts/ProyectsLayout.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'Principal' }, // Redirige a Principal por defecto
        },
        {
          path: 'Principal', // Nota: sin slash inicial
          name: 'Principal',
          component: ProyectosView,
        },
      ]
    },
  ],
})

export default router