import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './Info.module.css';
import {Text} from "@/shared/ui/Text/Text.tsx";

export const Info = () => {
  return (
    <div className={cls.info}>
      <div className={cls.left}>
        <Text>Друзей приглашено: 0</Text>
        <Text className={cls.text}>
          Баланс: <span>0 руб.</span>
        </Text>
      </div>
      <Button className={cls.button} size={'small'} theme={'gray'}>Вывести</Button>
    </div>
  );
};
