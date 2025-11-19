import type { JSX } from 'react';

import { AddDevicePage } from '@/pages/AddDevicePage';
import { AllHistoryPage } from '@/pages/AllHistoryPage';
import { ConnectionTVPage } from '@/pages/ConnectionTVPage';
import { ConnectionPage } from '@/pages/ConnetctionPage';
import { DisablePage } from '@/pages/DisablePage';
import { Homepage } from '@/pages/Homepage';
import { ManualPage } from '@/pages/ManualPage';
import { NoSubscriptionPage } from '@/pages/NoSubscriptionPage';
import { PartnershipPage } from '@/pages/PartnershipPage';
import { PayPage } from '@/pages/PayPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { PromocodePage } from '@/pages/PromocodePage';
import { SubscriptionPage } from '@/pages/SubscriptionPage';
import { WeekPage } from '@/pages/WeekPage';

import { RoutePaths } from './routesPaths.tsx';

export const routes: Record<RoutePaths, JSX.Element> = {
  [RoutePaths.MAIN]: <Homepage />,
  [RoutePaths.PAY]: <PayPage />,
  [RoutePaths.CONNECTION]: <ConnectionPage />,
  [RoutePaths.MANUAL]: <ManualPage />,
  [RoutePaths.SUBSCRIPTION]: <SubscriptionPage />,
  [RoutePaths.WEEK]: <WeekPage />,
  [RoutePaths.ADD_DEVICES]: <AddDevicePage />,
  [RoutePaths.PARTNERSHIP]: <PartnershipPage />,
  [RoutePaths.ALL_HISTORY]: <AllHistoryPage />,
  [RoutePaths.PROFILE]: <ProfilePage />,
  [RoutePaths.PROMOCODE]: <PromocodePage />,
  [RoutePaths.CONNECTION_TV]: <ConnectionTVPage />,
  [RoutePaths.DISABLE]: <DisablePage />,
  [RoutePaths.NO_SUBSCRIPTION]: <NoSubscriptionPage />,
  [RoutePaths.FREE_PERIOD]: <></>,
};
