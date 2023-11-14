import { useState, createContext } from "react";
import AppRouter from "./routes/donhenry.routes";

//Componente de Permisos
import { AbilityContext } from "./common/config/Can";
import { Ability } from "@casl/ability";

const ability = new Ability();
export const AppContext = createContext();

function App() {
  const [strURLInicio, setStrURLInicio] =
    useState(
      window.location.pathname === "/"
        ? "/donhenrycafe"
        : window.location.pathname
    ) >
    (
      <AppContext.Provider
        value={{
          strURLInicio,
          setStrURLInicio,
        }}
      >
        <AbilityContext.Provider value={ability}>
          return <AppRouter />
        </AbilityContext.Provider>
      </AppContext.Provider>
    );
}

export default App;
