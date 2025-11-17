import type { PropsWithChildren, ReactNode } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './MenuButton.module.css';

interface MenuButtonProps {
  Icon: ReactNode;
  name: string;
  className?: string;
}

export const MenuButton = ({
  children,
  className,
  Icon,
  name,
  ...others
}: PropsWithChildren<MenuButtonProps>) => {
  const buttonClass = classNames(cls.button, [className]);

  return (
    <Button className={buttonClass} {...others}>
      {Icon}
      <span className={cls.name}>{name}</span>
      <span className={cls.end}> {children}</span>
    </Button>
  );
};
