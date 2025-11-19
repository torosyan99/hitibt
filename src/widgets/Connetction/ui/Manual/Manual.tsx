import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './Manual.module.css';

export const Manual = () => {
  return (
    <Box className={cls.box}>
      <h5>Ручная настройка</h5>
      <Text className={cls.text} size={'medium'} type={'gray'}>
        Вы можете настроить VPN вручную, для этого скопируйте ключ и вставьте в приложение.
      </Text>
      <Button to={RoutePaths.MANUAL} theme={'gray'} size={'small'}>
        Настроить вручную
      </Button>
    </Box>
  );
};
