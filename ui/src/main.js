import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { keycloak } from './keycloak';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    // Launch the app if the user is authenticated
    const app = createApp(App);
    app.use(router);
    app.provide('$keycloak', keycloak);  // Provide Keycloak globally if needed
    app.mount('#app');
  } else {
    console.error("User could not be authenticated!");
  }
}).catch(error => {
    console.error('Failed to initialize Keycloak', error);
  });