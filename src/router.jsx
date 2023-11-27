import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Middlewares
import Auth from "./common/middlewares/Auth";

//Components
import Loading from "./common/components/Loader";

import { ShoppinCartProvider } from "./contexts/ShoppinCartContext";
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
const Cart = lazy(() => import("./pages/cart"));

const AppRouter = () => {
  //===============================================================================================================================================
  //========================================== Renders ============================================================================================
  //===============================================================================================================================================
  return (
    <Auth>
      <ShoppinCartProvider>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/register" element={<Register />} />

              <Route path="/login" element={<Login />} />

              <Route path="/forgotpassword" element={<ForgotPassword />} />

              <Route path="/resetpassword" element={<ResetPassword />} />

              <Route path="/productos" element={<Products />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/eventos" element={<Events />} />

              <Route path="/donhenrycafe" element={<DonHenryCafeRoutes />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </ShoppinCartProvider>
    </Auth>
  );
};

export default AppRouter;
