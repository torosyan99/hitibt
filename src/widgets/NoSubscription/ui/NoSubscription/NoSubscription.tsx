import { Vpn } from '../Vpn/Vpn.tsx';

import cls from './NoSubscription.module.css'
import {Warning} from "@/shared/ui/Warning/Warning.tsx";
import {RightText} from "@/entities/RightsText";

export const NoSubscription = () => {
  return (
    <section>
      <Vpn />
      <Warning theme={'gray'} className={cls.warning}>
        На пробном тарифе VPN можно добавить только на 2 устройства.
      </Warning>
      <RightText />
    </section>
  );
};
