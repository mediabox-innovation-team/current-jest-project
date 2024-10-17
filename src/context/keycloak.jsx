// // info useKeycloak.js
import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";

<<<<<<< HEAD
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
=======
const initOptions = {
  url: "http://localhost:8080/",
  realm: "JEST_PROJECT",
  clientId: "current-jest-project",
};

let kc;

export const useKeycloak = () => {
  const [keycloak, setKeycloak] = useState();

  useEffect(() => {
    if (!kc) {
      kc = new Keycloak(initOptions);
    }

    kc.init({
      onLoad: "login-required",
      checkLoginIframe: true,
      pkceMethod: "S256",
    })
      .then((auth) => {
        if (!auth) {
          window.location.reload();
        } else {
          console.info("Authenticated");
          setKeycloak(kc);
        }
      })
      .catch(() => {
        console.error("Authentication Failed");
      });

    // Optionnel - Nettoyage si nécessaire
    return () => {
      // Code de nettoyage si nécessaire
    };
  }, []);

  return keycloak;
};
>>>>>>> c99db879d15120e0703f1dfec0798ad514a88c25
