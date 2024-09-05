import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth', // URL вашего сервера Keycloak
  realm: 'your-realm',               // Имя вашего Realm
  clientId: 'your-client-id'          // Имя вашего клиента
});

export default keycloak;
