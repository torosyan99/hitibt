import ShieldCancelIcon from '@/shared/assets/images/shield-cancel.svg?react';
import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { IconTitleText } from '@/shared/ui/IconTitleText/IconTitleText.tsx';

import cls from './Vpn.module.css';

export const Vpn = () => {
  return (
    <Box padding={'v-2'} className={cls.automatic}>
      <IconTitleText
        title={'Ваш VPN не настроен'}
        text={'Оформите подписки или воспользуйтесь Бесплатным пробным периодом'}
        Icon={<ShieldCancelIcon />}
      />
      <div className={cls.buttons}>
        <Button theme={'blue'} size={'small'}>
          Бесплатный период 7 дней
        </Button>
        <Button className={cls.button} to={RoutePaths.PAY} theme={'gray'} size={'small'}>
          Оформить подписку
        </Button>
      </div>
    </Box>
  );
};
