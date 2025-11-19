import { useState } from 'react';

import { Slider } from '@/features/Slider/ui/Slider.tsx';

import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './AddDevice.module.css';

export const AddDevice = () => {
  const [devices, setDevices] = useState(3);
  console.log(devices);
  return (
    <section className={cls.devices}>
      <Slider setState={setDevices} />
      <div className={cls.buttons}>
        <Button size={'large'} theme={'blue'}>
          Применить
        </Button>
        <Button to={RoutePaths.MAIN} size={'large'}>
          Отмена
        </Button>
      </div>
    </section>
  );
};
