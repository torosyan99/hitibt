import ErrorIcon from '@/shared/assets/images/error-icon.svg?react';
import DoneIcon from '@/shared/assets/images/green-check-icon.svg?react';
import TimeWarmIcon from '@/shared/assets/images/time-warm-icon.svg?react';
import WarmIcon from '@/shared/assets/images/warm-icon.svg?react';

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
