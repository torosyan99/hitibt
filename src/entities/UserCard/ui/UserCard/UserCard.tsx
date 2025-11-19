import { Answer } from '@/entities/Answer';
import { Bottom } from '@/entities/UserCard/ui/Bottom/Bottom.tsx';

import { Box } from '@/shared/ui/Box/Box.tsx';

import { userCardConfig } from '../../config/userCardConfig.tsx';
import type { UserCardProps } from '../../types';

import cls from './UserCard.module.css';

export const UserCard = ({ type, status }: UserCardProps) => {
  const { type: statusType, title, text, to } = userCardConfig[type];

  return (
    <div className={cls.card}>
      <Box bottomText={'15% кешбек за рефералов пожизненно'}>
        <Answer type={statusType} title={title} text={text} />
        <Bottom status={status} to={to} />
      </Box>
    </div>
  );
};
