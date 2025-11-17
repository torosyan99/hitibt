import type { ReactNode } from 'react';

import type { AnswerProps } from '@/entities/Answer';

import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';

export interface ButtonProps {
  to: RoutePaths.SUBSCRIPTION | RoutePaths.PAY | RoutePaths.FREE_PERIOD;
}

export type UserCardTypes =
  | 'not-configured'
  | 'trial-period'
  | 'has-ended'
  | 'working'
  | 'not-extended';

export type UserCardConfig = {
  [K in UserCardTypes]: AnswerProps & ButtonProps;
};

export interface UserCardProps {
  type: UserCardTypes;
  Profile?: ReactNode;
  status: string;
}
