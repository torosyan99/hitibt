import DesktopIcon from '@/shared/assets/images/desktop-icon.svg?react';
import ProfileIcon from '@/shared/assets/images/profile-icon.svg?react';
import RubIcon from '@/shared/assets/images/rub-icon.svg?react';
import ShieldIcon from '@/shared/assets/images/shield-icon.svg?react';
import SupportIcon from '@/shared/assets/images/support-icon.svg?react';
import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton.tsx';

import cls from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={cls.navigation}>
      <MenuButton Icon={<ShieldIcon />} to={RoutePaths.CONNECTION} title={'Настроить VPN'}>
        maсOS
      </MenuButton>
      <MenuButton Icon={<DesktopIcon />} title={'VPN на телевизор'}>
        AndroidTV
      </MenuButton>
      <MenuButton Icon={<RubIcon />} title={'VPN на телевизор'}>
        0 ₽
      </MenuButton>
      <MenuButton className={cls.endButton} Icon={<ProfileIcon />} title={'Профиль'} />
      <MenuButton className={cls.endButton} Icon={<SupportIcon />} title={'Поддержка'} />
    </div>
  );
};
