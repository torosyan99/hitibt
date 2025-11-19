import type { State } from '@/features/History/types';

import PaymentIcon from '@/shared/assets/images/history-payment.svg?react';
import WithdrawIcon from '@/shared/assets/images/history-withdraw.svg?react';
import TickCircleIcon from '@/shared/assets/images/tick-circle.svg?react';
import { Box } from '@/shared/ui/Box/Box.tsx';

import cls from './HistoryItem.module.css';

export const HistoryItem = ({ type, date, price }: State) => {
  return (
    <Box className={cls.box}>
      {type === 'withdraw' ? <WithdrawIcon /> : <PaymentIcon />}
      <span className={cls.price}>{price} </span>
      <div className={cls.right}>
        {type === 'withdraw' ? <span>Оплата подписки</span> : <span>Вывод бонусов</span> }
        <div className={cls.date}>
          <TickCircleIcon />
          {date}
        </div>
      </div>
    </Box>
  );
};
