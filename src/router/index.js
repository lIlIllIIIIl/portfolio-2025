import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'

import OldHomePage from '@/pages/old/HomePage.vue'
import OldAboutPage from '@/pages/old/AboutPage.vue'
import OldWorkPage from '@/pages/old/WorkPage.vue'
import OldContactPage from '@/pages/old/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  // { path: '/work', component: WorkPage },
  // { path: '/contact', component: ContactPage },
  // old
  { path: '/old', component: OldHomePage },
  { path: '/old/about', component: OldAboutPage },
  { path: '/old/work', component: OldWorkPage },
  { path: '/old/contact', component: OldContactPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
