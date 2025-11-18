import AndroidIcon from '@/shared/assets/images/android-icon.svg?react';
import AppleIcon from '@/shared/assets/images/apple-icon.svg?react';
import LinuxIcon from '@/shared/assets/images/linux-icon.svg?react';
import MacOSIcon from '@/shared/assets/images/macOS-icon.svg?react';
import WindowsIcon from '@/shared/assets/images/windows-icon.svg?react';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton.tsx';

import cls from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={cls.navigation}>
      <MenuButton to={'#'} Icon={<AppleIcon />} title={'Скачать Happ на iPhone'} />
      <MenuButton to={'#'} Icon={<AndroidIcon />} title={'Скачать Happ на Android'} />
      <MenuButton to={'#'} Icon={<MacOSIcon />} title={'Скачать Happ на macOS'} />
      <MenuButton to={'#'} Icon={<WindowsIcon />} title={'Скачать Happ на Windows'} />
      <MenuButton to={'#'} Icon={<LinuxIcon />} title={'Скачать Happ на Linux'} />
    </nav>
  );
};
