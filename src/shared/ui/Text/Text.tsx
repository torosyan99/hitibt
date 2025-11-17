import type {PropsWithChildren, ReactNode} from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Text.module.css';

interface TextProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'gray';
  className?: string;
  children: ReactNode;
}

export const Text = ({
  size = 'medium',
  type = 'primary',
  className,
  children,
}: PropsWithChildren<TextProps>) => {
  return <p className={classNames(cls.text, [cls[size], cls[type], className])}>{children}</p>;
};
