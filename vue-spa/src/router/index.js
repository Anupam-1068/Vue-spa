import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import LoginPage from '../components/LoginPage.vue';
import AboutPage from '../components/AboutUs.vue';
import ContactPage from '../components/ContactUs.vue';

const routes = [
  {
    path: '/vue-spa',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
