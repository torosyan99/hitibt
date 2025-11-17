import { Answer } from '@/entities/Answer';
import { Devices } from '@/entities/Devices/ui/Devices.tsx';

import { Box } from '@/shared/ui/Box/Box.tsx';

import { userCardConfig } from '../../config/userCardConfig.tsx';
import type { UserCardProps } from '../index.ts';
import { Button } from '../Button/Button.tsx';

import cls from './UserCard.module.css';

export const UserCard = ({ type, Profile, status }: UserCardProps) => {
  const { type: statusType, title, text, to } = userCardConfig[type];

  return (
    <div className={cls.card}>
      <Box bottomText={'15% кешбек за рефералов пожизненно'}>
        {Profile ? Profile : <Answer type={statusType} title={title} text={text} />}

        <div className={cls.flex}>
          <span className={cls.status}>{status}</span>
          <Devices active={1} availableQuantity={2} />
        </div>
        <Button to={to} />
      </Box>
    </div>
  );
};
