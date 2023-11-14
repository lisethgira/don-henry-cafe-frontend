import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//===============================================================================================================================================
//========================================== Rutas principales  =================================================================================
//===============================================================================================================================================
const DonHenryCafeRoutes = lazy(() => import('./routes/donhenry.routes'));

//===============================================================================================================================================
//========================================== Otras rutas ========================================================================================
//===============================================================================================================================================
const PageNotFound = lazy(() => import('./common/components/error/404'));
const Home = lazy(() => import('./pages/index'));

const AppRouter = () => {
  //===============================================================================================================================================
  //========================================== Renders ============================================================================================
  //===============================================================================================================================================
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/donhenrycafe" element={<DonHenryCafeRoutes />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
