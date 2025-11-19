import type { ReactNode } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { type ButtonProps } from '@/shared/ui/Button/types.ts';

import cls from './MenuButton.module.css';

type MenuButtonProps = {
  Icon: ReactNode;
  title: string;
  className?: string;
} & ButtonProps;

export const MenuButton = ({ children, className, Icon, title, ...others }: MenuButtonProps) => {
  const buttonClass = classNames(cls.button, [className]);
  const innerTag = (
    <>
      {Icon}
      <span className={cls.name}>{title}</span>
      <span className={cls.end}> {children}</span>
    </>
  );

  return (
    <Button className={buttonClass} {...others}>
      {innerTag}
    </Button>
  );
};
