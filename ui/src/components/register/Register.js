import axios from 'axios';
import { keycloak, keycloakConfig }  from '../../keycloak';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const tokenResponse = await axios.post(`${keycloakConfig.url}/realms/${keycloak.realm}/protocol/openid-connect/token`, new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: keycloakConfig.clientId,
          client_secret: keycloakConfig.clientSecret
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        const accessToken = tokenResponse.data.access_token;

        const response = await axios.post(`http://localhost:8080/admin/realms/${keycloak.realm}/users`, {
          username: this.email,
          email: this.email,
          enabled: true,
          credentials: [{ type: 'password', value: this.password, temporary: false }]
        }, {
          headers: {

            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        });

        console.log('User registered', response.data);
        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
    goToLogin() {
      this.$router.push({ name: 'Login' });
    }
  }
};
