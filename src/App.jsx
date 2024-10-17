import { useEffect } from "react";
import "./App.css";
import Users from "./pages/Users/Users";
import { initKeycloak } from "./context/keycloak";

const App = () => {
  useEffect(() => {
    initKeycloak(() => {
      console.log('Keycloak Est bel et bien lance...');
    });
  }, []);
  return (
    <>
      <div className="card">
        <Users />
      </div>
    </>
  );
}

export default App;
