import { Button } from '@/shared/ui/Button/Button.tsx';

import type { State } from '../../types';

import cls from './Info.module.css';

interface InfoProps {
  onClick: () => void;
  state: State;
}

export const Info = ({ onClick, state }: InfoProps) => {
  return (
    <div className={cls.info}>
      <h5>Подтверждение</h5>
      <div className={cls.box}>
        <span>Оплата до 1 ноября 2025, 30 дней</span>
        <div className={cls.line}></div>
        <span>Количество устройств: 1</span>
      </div>

      <Button size={'large'} theme={'blue'} onClick={onClick}>
        <span>Оплатить {state.details.price}</span>
      </Button>
    </div>
  );
};
