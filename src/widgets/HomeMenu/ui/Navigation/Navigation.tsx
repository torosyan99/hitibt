import DesktopIcon from '@/shared/assets/images/desktop.svg?react';
import ProfileIcon from '@/shared/assets/images/profile-icon.svg?react';
import RubIcon from '@/shared/assets/images/rub-icon.svg?react';
import SupportIcon from '@/shared/assets/images/support.svg?react';
import ShieldIcon from '@/shared/assets/images/shield.svg?react';
import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton.tsx';

import cls from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={cls.navigation}>
      <MenuButton Icon={<ShieldIcon />} to={RoutePaths.CONNECTION} title={'Настроить VPN'}>
        maсOS
      </MenuButton>
      <MenuButton to={RoutePaths.CONNECTION_TV} Icon={<DesktopIcon />} title={'VPN на телевизор'}>
        AndroidTV
      </MenuButton>
      <MenuButton to={RoutePaths.PARTNERSHIP} Icon={<RubIcon />} title={'VPN на телевизор'}>
        0 ₽
      </MenuButton>
      <MenuButton to={RoutePaths.PROFILE} className={cls.endButton} Icon={<ProfileIcon />} title={'Профиль'} />
      <MenuButton className={cls.endButton} Icon={<SupportIcon />} title={'Поддержка'} />
    </nav>
  );
};