import AndroidIcon from '@/shared/assets/images/android.svg?react';
import AppleIcon from '@/shared/assets/images/apple.svg?react';
import LinuxIcon from '@/shared/assets/images/linux.svg?react';
import MacOSIcon from '@/shared/assets/images/macOS.svg?react';
import WindowsIcon from '@/shared/assets/images/windows.svg?react';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton.tsx';

import cls from './Manual.module.css';

export const ManualMenu = () => {
  return (
    <section>
      <nav className={cls.navigation}>
        <MenuButton
          className={cls.button}
          to={'#'}
          Icon={<AppleIcon />}
          title={'Скачать Happ на iPhone'}
        />
        <MenuButton
          className={cls.button}
          to={'#'}
          Icon={<AndroidIcon />}
          title={'Скачать Happ на Android'}
        />
        <MenuButton
          className={cls.button}
          to={'#'}
          Icon={<MacOSIcon />}
          title={'Скачать Happ на macOS'}
        />
        <MenuButton
          className={cls.button}
          to={'#'}
          Icon={<WindowsIcon />}
          title={'Скачать Happ на Windows'}
        />
        <MenuButton
          className={cls.button}
          to={'#'}
          Icon={<LinuxIcon />}
          title={'Скачать Happ на Linux'}
        />
      </nav>
    </section>
  );
};
