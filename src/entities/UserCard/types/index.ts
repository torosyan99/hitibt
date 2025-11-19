import type { AnswerProps } from '@/entities/Answer';

import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';

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
  status: string;
}

export interface UserCardWithAvatarProps {
  type: UserCardTypes;
  status: string;
  url?: string;
  name: string;
  id: string;
}
