import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@views/HomeView.vue')
const RutaView = () => import('@views/RutaView.vue')
const HitoView = () => import('@views/HitoView.vue')
const TerminosView = () => import('@views/TerminosView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/ruta/:id',
    name: 'ruta',
    component: RutaView,
  },
  {
    path: '/ruta/:rutaId/hito/:hitoId',
    name: 'hito',
    component: HitoView,
  },
  {
    path: '/terminos-de-uso',
    name: 'terminos',
    component: TerminosView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
