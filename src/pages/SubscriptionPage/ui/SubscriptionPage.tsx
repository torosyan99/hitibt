import ComputerSetting from '@/shared/assets/images/computer-setting.svg?react';
import { IconTitle } from '@/shared/ui/IconTitle/IconTitle.tsx';
import {Subscription} from "@/widgets/Subscription";

export const SubscriptionPage = () => {
  return (
    <>
      <IconTitle title={'Управление подпиской'} Icon={<ComputerSetting />} />
      <Subscription />
    </>
  );
};
