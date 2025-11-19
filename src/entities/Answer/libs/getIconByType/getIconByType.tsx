import ErrorIcon from '@/shared/assets/images/error.svg?react';
import DoneIcon from '@/shared/assets/images/green-check.svg?react';
import TimeWarmIcon from '@/shared/assets/images/time-warm.svg?react';
import WarmIcon from '@/shared/assets/images/warm.svg?react';

import type { AnswerType } from '../../types';

export function getIconByType(type: AnswerType) {
  switch (type) {
    case 'done':
      return <DoneIcon />;
    case 'warm':
      return <WarmIcon />;
    case 'time-warm':
      return <TimeWarmIcon />;
    case 'error':
      return <ErrorIcon />;
  }
}
