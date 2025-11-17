import { Link } from 'react-router-dom';

import AddIcon from '@/shared/assets/images/add-circle.svg?react';
import SettingIcon from '@/shared/assets/images/setting.svg?react';
import { classNames } from '@/shared/libs/classNames/classNames.ts';

import type { ButtonProps } from '../index.ts';

import cls from './Button.module.css';

export const Button = ({ to }: ButtonProps) => {
  switch (to) {
    case '/subscription':
      return (
        <Link className={classNames(cls.button, [cls.green])} to={to}>
          <SettingIcon />
          Управлять подпиской
        </Link>
      );

    case '/free-period':
      return (
        <Link className={cls.button} to={to}>
          <AddIcon />
          Бесплатный период
        </Link>
      );
    case '/pay':
      return (
        <Link className={cls.button} to={to}>
          <AddIcon />
          Купить подписку
        </Link>
      );
  }
};
