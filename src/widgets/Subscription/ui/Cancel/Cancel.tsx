import { useState } from 'react';

import { Answer } from '@/entities/Answer';

import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { TitleText } from '@/shared/ui/TitleText/TitleText.tsx';

import cls from './Cancel.module.css';

interface CancelProps {
  onClosePanel: () => void;
}

export const Cancel = ({ onClosePanel }: CancelProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  const onClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <TitleText
        text={'Будем признательны честному, если ответите честно'}
        title={'Почему хотите отменить подписку?'}
      />
      <Modal isOpen={modalOpen} onClose={onClose}>
        <Answer
          type={'done'}
          title={'Подписка отменена'}
          text={
            <>Нам жаль, что Вы решили уйти 😔<br />
              Доступ сохранится до конца оплаченного периода.</>
          }
        />
        <Button className={cls.menuButton} to={RoutePaths.MAIN} theme={'blue'} size={'small'}>
          Главное меню
        </Button>
      </Modal>
      <div className={cls.buttons}>
        <Button className={cls.button} onClick={onClick} size={'small'}>
          💰 Дорогая подписка
        </Button>
        <Button className={cls.button} onClick={onClick} size={'small'}>
          😡 Низкая скорость
        </Button>
        <Button className={cls.button} onClick={onClick} size={'small'}>
          😵‍💫 Не разобрался (сложно)
        </Button>
        <Button className={cls.button} onClick={onClick} size={'small'}>
          👍 Больше не нужен VPN
        </Button>
        <Button className={cls.button} onClick={onClick} size={'small'}>
          💛 Планирую вернуться позже
        </Button>
        <Button className={cls.button} onClick={onClick} size={'small'}>
          Другое
        </Button>
        <Button className={cls.button}  onClick={onClosePanel} theme={'red'} size={'small'}>
          Отмена
        </Button>
      </div>
    </>
  );
};
