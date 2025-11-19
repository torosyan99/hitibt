import BookIcon from '@/shared/assets/images/book.svg?react';
import DevicesIcon from '@/shared/assets/images/devices.svg?react';
import PromoIcon from '@/shared/assets/images/promo.svg?react';
import RubIcon from '@/shared/assets/images/rub-icon.svg?react';
import SupportIcon from '@/shared/assets/images/support.svg?react';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton.tsx';

import cls from './Navigation.module.css';
import {RoutePaths} from "@/shared/configs/routesConfig/routesPaths.tsx";

export const Navigation = () => {
  return (
    <Box className={cls.box} padding={'v-3'}>
      <nav className={cls.nav}>
        <MenuButton to={RoutePaths.PARTNERSHIP} className={cls.button} Icon={<RubIcon />} title={'Партнерская программа'} />
        <MenuButton to={RoutePaths.PROMOCODE} className={cls.button} Icon={<PromoIcon />} title={'Активировать промокод'} />
        <MenuButton
          className={cls.button}
          Icon={<SupportIcon />}
          title={'Связаться с поддержкой'}
        />
        <MenuButton className={cls.button} Icon={<DevicesIcon />} title={'Инструкция для всех устройств'} />
        <MenuButton className={cls.button} Icon={<BookIcon />} title={'Пользовательское соглашение'} />
      </nav>
    </Box>
  );
};
