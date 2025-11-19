import { type ReactNode } from 'react';

import { HistoryItem } from '@/features/History/ui/HistoryItem/HistoryItem.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';

import type { State } from '../../types';

import cls from './History.module.css';

interface HistoryProps {
  limit: number;
  Top?: ReactNode;
  Bottom?: ReactNode;
  setLimit?: (limit: number) => void;
  config: State[];
}

export const History = ({ limit, Top, Bottom, setLimit, config }: HistoryProps) => {
  const nextLimit = limit + 5;
  const onClick = () =>
    setLimit?.(config.length > nextLimit ? nextLimit : config.length);

  return (
    <div>
      {Top}
      <ul className={cls.list}>
        {config.slice(0, limit).map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </ul>
      {Bottom || (
        <Button className={cls.button} onClick={onClick}>
          Показать еще
        </Button>
      )}
    </div>
  );
};
