import { AllHistory } from '@/widgets/AllHistory';
import { Menu } from '@/widgets/Menu';

import CameraIcon from '@/shared/assets/images/camera.svg?react';
import { IconTitle } from '@/shared/ui/IconTitle/IconTitle.tsx';

export const AllHistoryPage = () => {
  return (
    <>
      <IconTitle Icon={<CameraIcon />} title={'Начисления и выплаты'} />
      <AllHistory />
      <Menu />
    </>
  );
};
