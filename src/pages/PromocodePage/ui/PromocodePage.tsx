import {IconTitle} from "@/shared/ui/IconTitle/IconTitle.tsx";
import PromocodeIcon from '@/shared/assets/images/promo-2.svg?react'
import {Promocode} from "@/widgets/Promocode";

export const PromocodePage = () => {
  return (
    <>
      <IconTitle title={'Промокоды'} Icon={<PromocodeIcon />}/>
      <Promocode />
    </>
  );
};
