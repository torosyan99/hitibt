import { Link } from 'react-router-dom';

import { Answer } from '@/entities/Answer';
import { Devices } from '@/entities/Devices/ui/Devices.tsx';

import EditIcon from '@/shared/assets/images/edit.svg?react';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Warning } from '@/shared/ui/Warning/Warning.tsx';

import cls from './SubscriptionCard.module.css';

export const SubscriptionCard = () => {
  return (
    <Box className={cls.card}>
      <Answer
        type={'done'}
        title={'Подписка активна'}
        text={
          'В данном разделе вы можете добавить новое устройство, изменить тариф и перенести подписки на другое устройство.'
        }
      />

      <div className={cls.flex}>
        <Link className={cls.period} to="#">
          Период: 1 месяц
          <EditIcon />
        </Link>
        <Devices active={1} availableQuantity={1} />
      </div>
      <Warning theme={'orange'}>
        Достигнут лимит устройств. Для подключения нового устройства отключите существующее или
        обновите тарифный план.
      </Warning>
    </Box>
  );
};
