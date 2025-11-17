import type { JSX } from 'react';

import { Homepage } from '@/pages/Homepage';
import { PayPage } from '@/pages/PayPage';

import { RoutePaths } from './routesPaths.tsx';

export const routes: Record<RoutePaths, JSX.Element> = {
  [RoutePaths.MAIN]: <Homepage />,
  [RoutePaths.PAY]: <PayPage />,
  [RoutePaths.SUBSCRIPTION]: <></>,
  [RoutePaths.FREE_PERIOD]: <></>,
};
