import {  useState } from 'react';

import type { PeriodType } from '../../types';
import { PeriodButton } from '../PeriodButton/PeriodButton.tsx';

import cls from './SubPeriod.module.css';

interface SubPeriodProps {
  setState: (item: PeriodType) => void;
  config: PeriodType[];
}

export const SubPeriod = ({ setState, config }: SubPeriodProps) => {
  const [states, setStates] = useState(config);

  const handleClick = (item: PeriodType) => {
    setStates(states.map((i) => ({ ...i, checked: i === item })));
    setState(item);
  };

  return (
    <div className={cls.periods}>
      {states.map((item) => (
        <PeriodButton key={item.period} onClick={() => handleClick(item)} {...item} />
      ))}
    </div>
  );
};
