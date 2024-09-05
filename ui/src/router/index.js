import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import Login from '@/components/login/Login.vue';
import Register from '@/components/register/Register.vue';
import keycloak from '@/keycloak';

Vue.use(Router);

const router = new Router({
  mode: 'history', 
  routes: [
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
      component: Register
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!keycloak.authenticated) {
        keycloak.login({ redirectUri: window.location.origin + to.fullPath });
      } else {
        next();
      }
    } else {
      next();
    }
});

export default router;
