import Vue from 'vue';
import App from './App.vue';
import router from './router';
import keycloak from './keycloak';

keycloak.init({ onLoad: 'login-required' }).then(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
}).catch((error) => {
  console.error('Failed to initialize Keycloak', error);
});
