import { useState } from 'react';

import { detailsConfig } from '../../config/detailsConfig.tsx';
import type { DetailsType } from '../../types';
import { DetailsButton } from './DetailsButton.tsx';

import cls from './Details.module.css';

interface DetailsProps {
  setState: (item: DetailsType) => void;
}

export const Details = ({ setState }: DetailsProps) => {
  const [states, setStates] = useState(detailsConfig);

  const handleClick = (item: DetailsType) => {
    setStates(states.map((i) => ({ ...i, checked: i === item })));
    setState(item);
  };

  return (
    <div className={cls.details}>
      {states.map((item) => (
        <DetailsButton key={item.period} onClick={() => handleClick(item)} {...item} />
      ))}
    </div>
  );
};
