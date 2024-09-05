import axios from 'axios';

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
        const response = await axios.post('http://localhost:8080/auth/admin/realms/your-realm/users', {
          username: this.email,
          email: this.email,
          enabled: true,
          credentials: [{ type: 'password', value: this.password, temporary: false }]
        }, {
          headers: {
            'Authorization': `Bearer ${yourAdminToken}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('User registered', response.data);
        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.error('Registration failed', error);
      }
    }
  }
};
