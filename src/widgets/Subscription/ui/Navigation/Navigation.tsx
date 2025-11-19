import AddIcon from '@/shared/assets/images/add.svg?react';
import BasketIcon from '@/shared/assets/images/basket.svg?react';
import CalendarIcon from '@/shared/assets/images/calendar.svg?react';
import CancelIcon from '@/shared/assets/images/cancel.svg?react';
import DevicesIcon from '@/shared/assets/images/devices.svg?react';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton.tsx';

import cls from './Navigation.module.css';
import {RoutePaths} from "@/shared/configs/routesConfig/routesPaths.tsx";

interface NavigationProps {
  onOpenPanel: () => void;
}

export const Navigation = ({ onOpenPanel }: NavigationProps) => {
  return (
    <nav className={cls.navigation}>
      <MenuButton to={RoutePaths.ADD_DEVICES} Icon={<AddIcon />} title={'Добавить устройство'} />
      <MenuButton to={RoutePaths.WEEK}   Icon={<CalendarIcon />} title={'Изменить период подписки'} />
      <MenuButton Icon={<BasketIcon />}  title={'Отключить ненужные устройства'} />
      <MenuButton Icon={<DevicesIcon />} title={'Инструкция для всех устройств'} />
      <MenuButton onClick={onOpenPanel} Icon={<CancelIcon />} title={'Отключить подписку'} />
    </nav>
  );
};
