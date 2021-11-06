import React from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/help"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Help />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
