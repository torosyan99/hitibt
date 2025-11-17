import { useLocation } from 'react-router-dom';

import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { classNames } from '@/shared/libs/classNames/classNames.ts';

import { Router } from './providers/router';

import './styles/fonts.css';
import './styles/reset.css';
import './styles/main.css';
import {useEffect} from "react";

export const App = () => {
  const location = useLocation();
  const bgApp = location.pathname === RoutePaths.MAIN ? 'bg-app' : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={classNames('app', [bgApp])}>
      <Router />
    </div>
  );
};
