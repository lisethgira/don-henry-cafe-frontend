import {Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <h1>estoy en la pagina de inicio de mi aplicación</h1>
        </Route> 
      </Routes>
    </>
  );
};

export default AppRouter;
