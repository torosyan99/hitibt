import type { PropsWithChildren } from 'react';

import WarningIcon from '@/shared/assets/images/warning.svg?react';
import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Warning.module.css';

interface WarningProps {
  className?: string;
  theme: 'orange' | 'gray';
}

export const Warning = ({ children, className, theme }: PropsWithChildren<WarningProps>) => {
  return (
    <div className={classNames(cls.warning, [cls[theme], className])}>
      <WarningIcon />
      <p>{children}</p>
    </div>
  );
};
