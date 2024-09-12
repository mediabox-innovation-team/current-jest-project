import Keycloak from "keycloak-js";

const keycloakConfiguration = {
  url: "http://localhost:8080/",
  realm: "JEST_PROJECT",
  clientId: "current-jest-project",
  clientSecret: "",
};

const keycloak = new Keycloak(keycloakConfiguration);

export default keycloak;
