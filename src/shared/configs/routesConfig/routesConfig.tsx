import type { JSX } from 'react';

import { ConnectionPage } from '@/pages/ConnetctionPage';
import { Homepage } from '@/pages/Homepage';
import { PayPage } from '@/pages/PayPage';

import { RoutePaths } from './routesPaths.tsx';

export const routes: Record<RoutePaths, JSX.Element> = {
  [RoutePaths.MAIN]: <Homepage />,
  [RoutePaths.PAY]: <PayPage />,
  [RoutePaths.CONNECTION]: <ConnectionPage />,
  [RoutePaths.SUBSCRIPTION]: <></>,
  [RoutePaths.FREE_PERIOD]: <></>,
};
