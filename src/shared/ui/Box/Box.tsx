import type { PropsWithChildren } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Box.module.css';

interface BoxProps {
  bottomText?: string;
  className?: string;
  padding?: 'v-1'|'v-2';
}

export const Box = ({ children, className, padding='v-1', bottomText }: PropsWithChildren<BoxProps>) => {
  return (
    <div className={classNames(cls.box, [className, cls[padding]], {
      [cls.withBottomText]: Boolean(bottomText),
    })}>
      {children}

      {bottomText && <div className={cls.bottomText}>{bottomText}</div>}
    </div>
  );
};
