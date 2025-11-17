import type { PropsWithChildren, ReactNode } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './MenuButton.module.css';

interface MenuButtonProps {
  Icon: ReactNode;
  title: string;
  to?:string
  className?: string;
}

export const MenuButton = ({
  children,
  className,
  to,
  Icon,
  title,
  ...others
}: PropsWithChildren<MenuButtonProps>) => {
  const buttonClass = classNames(cls.button, [className]);

  return (
    <Button to={to} className={buttonClass} {...others}>
      {Icon}
      <span className={cls.name}>{title}</span>
      <span className={cls.end}> {children}</span>
    </Button>
  );
};
