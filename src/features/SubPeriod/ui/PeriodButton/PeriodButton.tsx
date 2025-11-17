import CircleIcon from '@/shared/assets/images/circle.svg?react';
import YellowCheckIcon from '@/shared/assets/images/yellow-check.svg?react';
import { Button  } from '@/shared/ui/Button/Button.tsx';

import cls from './PeriodButton.module.css';

import type { PeriodType } from '../../types';

export const PeriodButton = ({ checked, tablet, price, period, onClick }: PeriodType) => {
  return (
    <Button className={cls.button}  size={'large'} onClick={onClick}>
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
