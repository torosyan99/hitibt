import { Route, Routes } from 'react-router-dom';

import { routes } from '@/shared/config/routesConfig/routesConfig.tsx';

export const Router = () => {
  return (
    <Routes>
      {Object.entries(routes).map(([path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
