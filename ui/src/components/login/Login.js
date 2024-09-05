import keycloak from '../keycloak';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      keycloak.login({ redirectUri: window.location.origin });
    },
    goToRegister() {
      this.$router.push({ name: 'Register' });
    }
  }
};
