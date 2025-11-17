import type { PropsWithChildren } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Box.module.css';

interface BoxProps {
  bottomText?: string;
}

export const Box = ({ children, bottomText }: PropsWithChildren<BoxProps>) => {
  return (
    <div className={classNames(cls.box, [], {
      [cls.withBottomText]: Boolean(bottomText),
    })}>
      {children}

      {bottomText && <div className={cls.bottomText}>{bottomText}</div>}
    </div>
  );
};
