import type { UserCardConfig } from '@/features/UserCard/types';

import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';

export const userCardConfig: UserCardConfig = {
  working: {
    title: 'Ваш VPN работает',
    text: 'Обходите блокировки и наслаждайтесь свободным доступом к интернету.',
    type: 'done',
    to: RoutePaths.SUBSCRIPTION,
  },
  'not-configured': {
    title: 'Ваш VPN не настроен',
    text: 'Чтобы протестировать ВПН, пожалуйста, оформите бесплатный период.',
    type: 'warm',
    to: RoutePaths.FREE_PERIOD,
  },
  'trial-period': {
    title: 'Пробный период',
    text: 'Чтобы продолжить пользоваться ВПН, пожалуйста, купите подписку.',
    type: 'time-warm',
    to: RoutePaths.PAY,
  },
  'has-ended': {
    title: 'Пробный период завершён',
    text: 'Чтобы продолжить пользоваться ВПН, пожалуйста, купите подписку.',
    type: 'warm',
    to: RoutePaths.PAY,
  },
  'not-extended': {
    title: 'Ваша подписка не продлилась',
    text: 'Чтобы продолжить пользоваться ВПН, пожалуйста, купите подписку.',
    type: 'error',
    to: RoutePaths.PAY,
  },
};
