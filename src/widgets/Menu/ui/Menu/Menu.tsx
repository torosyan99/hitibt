import { useEffect } from 'react';

import GamesIcon from '@/shared/assets/images/games.svg?react';
import HomeIcon from '@/shared/assets/images/home.svg?react';
import ProfileIcon from '@/shared/assets/images/profile-2.svg?react';
import WalletIcon from '@/shared/assets/images/wallet.svg?react';
import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';

import { MenuLink } from '../MenuLink/MenuLink.tsx';

import cls from './Menu.module.css';

export const Menu = () => {
  useEffect(() => {
    const app = document.querySelector('.app');
    if (!app) return;
    app.classList.add('app-with-menu');

    return () => {
      app.classList.remove('app-with-menu');
    };
  }, []);
  return (
    <div className={cls.menu}>
      <MenuLink title={'Главная'} Icon={<WalletIcon />} to={"page"} />
      <MenuLink title={'Заработать'} Icon={<HomeIcon />} to={RoutePaths.PARTNERSHIP} />
      <MenuLink title={'Игры'} Icon={<GamesIcon />} to={"page"} />
      <MenuLink title={'Профиль'} Icon={<ProfileIcon />} to={RoutePaths.MAIN} />
    </div>
  );
};
