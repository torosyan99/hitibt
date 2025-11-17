import { Children } from 'react';

import { Link } from 'react-router-dom';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import { type ButtonProps, isButtonProps, isLinkProps } from './types.ts';

import cls from './Button.module.css';

export const Button = (props: ButtonProps) => {
  const { className, size = 'none', theme = 'primary', children, ...others } = props;
  const buttonClass = classNames(cls.button, [className, cls[theme], cls[size]], {
    [cls.center]: Children.count(children) === 1,
  });

  if (isLinkProps(others)) {
    return (
      <Link className={buttonClass} {...others}>
        {children}
      </Link>
    );
  }

  if (isButtonProps(others)) {
    return (
      <button className={buttonClass} {...others}>
        {children}
      </button>
    );
  }
};
