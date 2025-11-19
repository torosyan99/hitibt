import { Switcher } from '@/shared/ui/Switcher/Switcher.tsx';

import { Payment } from '../Payment/Payment.tsx';
import { Withdraw } from '../Withdraw/Withdraw.tsx';

export const AllHistory = () => {
  return (
    <section>
      <Switcher
        params={[
          {
            buttonTitle: 'Начисления',
            Component: <Payment />,
          },
          {
            buttonTitle: 'Выплаты',
            Component: <Withdraw />,
          },
        ]}
      />
    </section>
  );
};
