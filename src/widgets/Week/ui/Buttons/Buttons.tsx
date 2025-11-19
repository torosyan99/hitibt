import { useState } from 'react';

import { Answer } from '@/entities/Answer';

import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import cls from './Buttons.module.css';

export const Buttons = () => {
  const [updateModal, setUpdateModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const onUpdate = () => {
    setUpdateModal(true);
  };
  const onCancel = () => {
    setCancelModal(true);
  };

  const onUpdateModalClose = () => {
    setUpdateModal(false);
  };

  const onCancelModalClose = () => {
    setCancelModal(false);
  };
  return (
    <div className={cls.buttons}>
      <Modal isOpen={updateModal} onClose={onUpdateModalClose}>
        <Answer
          type={'done'}
          title={'Тариф обновлён'}
          text={'Изменения вступят в силу автоматически после окончания оплаченного периода'}
        />
        <Button className={cls.button} theme={'blue'} size={'small'} to={RoutePaths.MAIN}>
          Главное меню
        </Button>
      </Modal>
      <Modal isOpen={cancelModal} onClose={onCancelModalClose}>
        <Answer
          type={'done'}
          title={'Подписка отменена'}
          text={
            <>
              Нам жаль, что Вы решили уйти 😔 <br />
              Доступ сохранится до конца оплаченного периода.
            </>
          }
        />
        <Button className={cls.button} theme={'blue'} size={'small'} to={RoutePaths.MAIN}>
          Главное меню
        </Button>
      </Modal>
      <Button onClick={onUpdate} theme={'blue'} size={'small'}>
        Перейти на 49 ₽ за 7 дней
      </Button>
      <Button onClick={onCancel} theme={'gray'} size={'small'}>
        Не инетресно
      </Button>
    </div>
  );
};
