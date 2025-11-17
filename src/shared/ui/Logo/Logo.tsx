import { Squircle } from 'corner-smoothing';

import LogoSvg from '@/shared/assets/images/logo.svg?react';
import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Logo.module.css';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={classNames(cls.logo, [className])}>
      <LogoSvg />
      <div className={cls.name}>
        <span>HitBit</span>
        <Squircle className={cls.vpn} cornerRadius={6}>
          VPN
        </Squircle>
      </div>
    </div>
  );
};
