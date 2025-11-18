import cls from './IconTitleText.module.css'
import type {ReactNode} from "react";
import {Text} from "@/shared/ui/Text/Text.tsx";


interface IconTitleTextProps {
  title: string
  text: string
  Icon:ReactNode
}

export const IconTitleText = ({title, text, Icon}:IconTitleTextProps) => {
  return (
    <div className={cls.iconTitleText}>
      {Icon}
      <h5 className={cls.title}>{title}</h5>
      <Text size={'small'} type={'gray'}>
        {text}
      </Text>
    </div>
  );
};
