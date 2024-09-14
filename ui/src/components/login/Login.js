import { keycloak }  from '../../keycloak';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const loginData = {
        username: this.email,
        password: this.password,
        grant_type: 'password',
        client_id: keycloakConfig.clientId, // The client ID from Keycloak
        client_secret: keycloakConfig.clientSecret
      };
      try {
        const response = await fetch(`http://localhost:8080/realms/${keycloak.realm}/protocol/openid-connect/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(loginData)
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error('Login failed: ' + errorText);
        }
  
        const tokenData = await response.json();
        console.log('Login successful:', tokenData);
  
        // Save token in local storage or state management (e.g., Vuex)
        localStorage.setItem('access_token', tokenData.access_token);
  
        // Optionally, you can also redirect to another page after successful login
        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.error('Login error:', error);
      }

    },
    goToRegister() {
      this.$router.push({ name: 'Register' });
      // keycloak.register({
      //   redirectUri: window.location.origin
      // });
    },
    created() {
      console.log("Keycloak URL:", process.env.VUE_APP_KEYCLOAK_URL);
    }
  }
};
