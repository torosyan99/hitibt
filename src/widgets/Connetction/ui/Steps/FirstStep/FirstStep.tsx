import { useState } from 'react';

import { BottomSheet } from '@/shared/ui/BottomSheet/BottomSheet.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './FirstStep.module.css'

export const FirstStep = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onClick = () => setIsOpen(true);

  return (
    <>
      <Button onClick={onClick} size={'small'} theme={'blue'}>
        Установить приложение
      </Button>
      <BottomSheet isOpen={isOpen} onClose={onClose}>
        <h5>Внимание</h5>
        <Text size={'medium'} type={'gray'} className={cls.text}>
          После установки приложения Happ обязательно вернитесь на этот экран и нажмите «Далее»,
          чтобы добавить ключ в приложение, без этого VPN работать не будет!
        </Text>
        <Button size={'large'} theme={'blue'} to={"#"}>
          Хорошо, перейти к установке
        </Button>
      </BottomSheet>
    </>
  );
};
