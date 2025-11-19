import { Box } from '@/shared/ui/Box/Box.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import { Form } from '../Form/Form.tsx';
import {Button} from "@/shared/ui/Button/Button.tsx";

import cls from './Promocode.module.css'

export const Promocode = () => {
  return (
    <section>
      <Form />
      <Box className={cls.box}>
        <h5>Где найти промокод?</h5>
        <Text className={cls.text} type={'gray'}>Все промокоды мы ежемесячно разыгрываем
          и публикуем в нашем новостном канале.</Text>
        <Button to={'#'} size={'small'} theme={'gray'}>Новостной канал</Button>
      </Box>
    </section>
  );
};
