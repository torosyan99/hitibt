import type { JSX } from 'react';

import { ConnectionPage } from '@/pages/ConnetctionPage';
import { Homepage } from '@/pages/Homepage';
import { ManualPage } from '@/pages/ManualPage';
import { PayPage } from '@/pages/PayPage';

import { RoutePaths } from './routesPaths.tsx';

export const routes: Record<RoutePaths, JSX.Element> = {
  [RoutePaths.MAIN]: <Homepage />,
  [RoutePaths.PAY]: <PayPage />,
  [RoutePaths.CONNECTION]: <ConnectionPage />,
  [RoutePaths.MANUAL]: <ManualPage />,
  [RoutePaths.SUBSCRIPTION]: <></>,
  [RoutePaths.FREE_PERIOD]: <></>,
};
