import CircleIcon from '@/shared/assets/images/circle.svg?react';
import YellowCheckIcon from '@/shared/assets/images/yellow-check.svg?react';
import { Button } from '@/shared/ui/Button/Button.tsx';

import type { DetailsType } from '../../types';

import cls from './Details.module.css';

export const DetailsButton = ({ checked, tablet, price, period, onClick }: DetailsType) => {
  return (
    <Button className={cls.button} size={'large'} onClick={onClick}>
      {checked ? <YellowCheckIcon /> : <CircleIcon />}
      <span>{period} </span>
      {tablet && <span className={cls.tablet}>{tablet}</span>}
      <span className={cls.end}>
        <span className={cls.price}>{price}</span>
        <span className={cls.device}>за 1 устройство</span>
      </span>
    </Button>
  );
};
