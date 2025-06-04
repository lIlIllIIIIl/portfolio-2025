import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'

import OldHomePage from '@/pages/old/HomePage.vue'
import OldAboutPage from '@/pages/old/AboutPage.vue'
import OldWorkPage from '@/pages/old/WorkPage.vue'
import OldProjectPage from '@/pages/old/ProjectPage.vue'
import OldContactPage from '@/pages/old/ContactPage.vue'

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'about', path: '/about', component: AboutPage },
  // { name: 'work', path: '/work', component: WorkPage },
  // { name: 'contact', path: '/contact', component: ContactPage },
  // old
  { path: '/old', component: OldHomePage },
  { path: '/old/about', component: OldAboutPage },
  { name: 'oldWork', path: '/old/work', component: OldWorkPage },
  { name: 'oldProject', path: '/old/project', component: OldProjectPage, props: true },
  { path: '/old/contact', component: OldContactPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
