import { Partnership } from '@/widgets/Partnership';

import PartnershipIcon from '@/shared/assets/images/partnership.svg?react';
import { IconTitle } from '@/shared/ui/IconTitle/IconTitle.tsx';
import {Menu} from "@/widgets/Menu";

export const PartnershipPage = () => {
  return (
    <>
      <IconTitle title={'Партнерская программа'} Icon={<PartnershipIcon />} />
      <Partnership />
      <Menu />
    </>
  );
};
