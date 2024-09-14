import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/home/Home.vue';
import Login from '../components/login/Login.vue';
import Register from '../components/register/Register.vue';
import { keycloakConfig,keycloack } from '../keycloak';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register, 
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// console.log(`auth: ${keycloak.authenticated}`);
console.log(`keycloag_config: ${keycloakConfig['url']}`);
console.log(`url: ${process.env.VUE_APP_KEYCLOAK_URL}`);


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !keycloak.authenticated) {
    keycloak.login();
  } else {
    next();
  }
});

export default router;
