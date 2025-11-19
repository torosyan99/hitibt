import { Link } from 'react-router-dom';

import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './RightText.module.css'

export const RightText = () => {
  return (
    <Text className={cls.text} type={'gray'} size={'small'}>
      Используя сервис, вы соглашаетесь с <Link to={'#'}>условиями Договора оферты</Link> и
      <Link to={'#'}>Политикой конфиденциальности</Link> .
    </Text>
  );
};
