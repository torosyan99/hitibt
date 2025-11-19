import type { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './MenuLink.module.css';

interface MenuLinkProps {
  title: string;
  Icon: ReactNode;
  to: string;
}

export const MenuLink = ({ title, Icon, to }: MenuLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => classNames(cls.link, [], { [cls.active]: isActive })}
      to={to}
    >
      {Icon}
      {title}
    </NavLink>
  );
};
