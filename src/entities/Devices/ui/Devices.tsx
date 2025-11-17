import cls from './Devices.module.css'
import {classNames} from "@/shared/libs/classNames/classNames.ts";

interface DevicesProps {
  active:number,
  availableQuantity: number
}

export const Devices = ({active, availableQuantity }:DevicesProps) => {
  if (active > availableQuantity) return null;


  return (
    <div className={classNames(cls.devices, [], {
      [cls.full]: active === availableQuantity,
    })}>
      {active}/{availableQuantity} устройств
    </div>
  );
};
