import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import { List } from '../List/List.tsx';

import cls from './Disable.module.css';

export const Disable = () => {
  return (
    <section>
      <List />
      <Box className={cls.box}>
        <h5>Нужно больше устройств?</h5>
        <Text className={cls.text} type={'gray'}>
          Расширьте подписку и используйте VPN на дополнительных устройствах.{' '}
        </Text>
        <Button to={RoutePaths.ADD_DEVICES} size={'small'} theme={'gray'}>
          Новостной канал
        </Button>
      </Box>
    </section>
  );
};
