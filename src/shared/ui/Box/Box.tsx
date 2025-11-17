import type { PropsWithChildren } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Box.module.css';

interface BoxProps {
  bottomText?: string;
  className?: string;
}

export const Box = ({ children, className, bottomText }: PropsWithChildren<BoxProps>) => {
  return (
    <div className={classNames(cls.box, [className], {
      [cls.withBottomText]: Boolean(bottomText),
    })}>
      {children}

      {bottomText && <div className={cls.bottomText}>{bottomText}</div>}
    </div>
  );
};
