import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import keycloak from "./context/keycloak.jsx";
//import { ReactKeycloakProvider } from "@react-keycloak/web";
// import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* <ReactKeycloakProvider authClient={keycloak}>  */}
    <App />
  {/* </ReactKeycloakProvider>  */}
  </StrictMode>
);
