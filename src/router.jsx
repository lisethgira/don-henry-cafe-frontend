import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//===============================================================================================================================================
//========================================== Rutas principales  =================================================================================
//===============================================================================================================================================
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPass"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPass"));
const DonHenryCafeRoutes = lazy(() => import("./routes/donhenry.routes"));

//===============================================================================================================================================
//========================================== Otras rutas ========================================================================================
//===============================================================================================================================================
const PageNotFound = lazy(() => import("./common/components/error/404"));
const Home = lazy(() => import("./pages/index"));
const Products = lazy(() => import("./pages/Products"));
const Events = lazy(() => import("./pages/Events"));

const ErrorPage = lazy(() => import("./common/components/error/index"));

const AppRouter = () => {
  //===============================================================================================================================================
  //========================================== Renders ============================================================================================
  //===============================================================================================================================================
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/productos" element={<Products />} />

          <Route path="/eventos" element={<Events />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/resetpassword" element={<ResetPassword />} />

          <Route path="/donhenrycafe" element={<DonHenryCafeRoutes />} />

          <Route path="*" element={<PageNotFound />} />
          
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
