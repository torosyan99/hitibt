import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './Devices.module.css';

interface DevicesProps {
  active: number;
  availableQuantity: number;
  className?:string
}

export const Devices = ({ active, availableQuantity, className }: DevicesProps) => {
  if (active > availableQuantity) return null;

  return (
    <div
      className={classNames(cls.devices, [className], {
        [cls.full]: active === availableQuantity,
      })}
    >
      {active}/{availableQuantity} устройств
    </div>
  );
};
