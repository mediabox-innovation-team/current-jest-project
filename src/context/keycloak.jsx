import Keycloak from "keycloak-js";

const keycloak = new Keycloak ({
  url: "http://localhost:8080/",
  realm: "JEST_PROJECT",
  clientId: "current-jest-project",
  clientSecret: "",
});

export const initKeycloak = (onAuthenticated) => {
  keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (authenticated) {
      onAuthenticated();
    } else {
      window.location.reload();
    }
  });
};

export const keycloakInstance = keycloak;
