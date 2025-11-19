import { Devices } from '@/entities/Devices/ui/Devices.tsx';
import { Button } from '@/entities/UserCard/ui/Button/Button.tsx';
import cls from '@/entities/UserCard/ui/UserCard/UserCard.module.css';

import type { ButtonProps } from '../../types';

type BottomProps = {
  status: string;
} & ButtonProps;

export const Bottom = ({ status, to }: BottomProps) => {
  return (
    <>
      <div className={cls.flex}>
        <span className={cls.status}>{status}</span>
        <Devices active={1} availableQuantity={2} />
      </div>
      <Button to={to} />
    </>
  );
};
