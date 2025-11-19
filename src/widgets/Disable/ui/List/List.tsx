import {Box} from "@/shared/ui/Box/Box.tsx";
import One from "@/shared/assets/images/one.svg?react"
import Two from "@/shared/assets/images/two.svg?react"
import Three from "@/shared/assets/images/three.svg?react"

import cls from './List.module.css'
import {Button} from "@/shared/ui/Button/Button.tsx";

export const List = () => {
  return (
    <Box padding={'v-2'}>
        <ul className={cls.list}>
          <li className={cls.item}>
             <One />
              Удалите конфигурацию HitBit с неиспользуемых устройств
          </li>
          <li className={cls.item}>
            <Two />
            Нажмите «Отключить ненужные»
          </li>
          <li className={cls.item}>
            <Three />
            Новые устройства подключатся автоматически
          </li>
        </ul>
      <Button  theme={'blue'} size={'small'}>
        Отключить ненужные
      </Button>
    </Box>
  );
};
