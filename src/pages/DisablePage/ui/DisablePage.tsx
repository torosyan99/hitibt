import {IconTitle} from "@/shared/ui/IconTitle/IconTitle.tsx";
import BasketIcon from  "@/shared/assets/images/basket-2.svg?react"
import {Disable} from "@/widgets/Disable";

export const DisablePage = () => {
  return (
    <>
      <IconTitle title={<>Отключить ненужные <br /> устройства</>} Icon={<BasketIcon />} />
      <Disable />
    </>
  );
};
