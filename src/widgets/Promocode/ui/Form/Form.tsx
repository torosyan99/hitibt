import { useState } from 'react';

import { Answer } from '@/entities/Answer';

import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './Form.module.css';

export const Form = () => {
  const [value, setValue] = useState('');
  const [showedModal, setShowedModal] = useState(false);
  const onClose = () => setShowedModal(false);

  const onSubmit = () => {
    setShowedModal(true);
  }
  return (
    <>
      <Box padding={'v-2'}>
        <Text type={'gray'} className={cls.text}>
          После успешной активации бонусные дни будут начислены автоматически
        </Text>
        <Input placeholder={'Введите промокод'} setState={setValue} state={value} />
        <Button theme={'blue'} size={'small'} onClick={onSubmit} className={cls.button}>
          Активировать
        </Button>
      </Box>
      <Modal isOpen={showedModal} onClose={onClose}>
        <Answer
          type={'done'}
          title={'Промокод активирован'}
          text={'5 дней бонусных дней были добавлены \n' + 'в вашу подписку.'}
        />
        <Button className={cls.menuButton} theme={'blue'} size={'small'} to={RoutePaths.MAIN}>
          Главное меню
        </Button>
      </Modal>
    </>
  );
};
