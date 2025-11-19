import type { ReactNode } from 'react';

import cls from './IconTitle.module.css';

interface IconTitleProps {
  title: string | ReactNode;
  Icon: ReactNode;
}

export const IconTitle = ({ title, Icon }:IconTitleProps) => {
  return (
    <div className={cls.iconTitle}>
      {Icon}
      <h3>{title}</h3>
    </div>
  );
};
