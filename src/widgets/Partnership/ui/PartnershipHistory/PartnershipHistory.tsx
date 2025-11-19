import { History, historyConfig } from '@/features/History';

import FolderOpenIcon from '@/shared/assets/images/folder-open.svg?react';
import { RoutePaths } from '@/shared/configs/routesConfig/routesPaths.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './PartnershipHistory.module.css';

export const PartnershipHistory = () => {
  return (
    <div>
      <h5 className={cls.title}>История начислений и выплат</h5>
      <History
        limit={5}
        config={historyConfig}
        Top={
          <Box className={cls.historyTop}>
            <FolderOpenIcon />
            <Text type={'gray'}>Здесь будут отображаться последние покупки ваших рефералов</Text>
          </Box>
        }
        Bottom={
          <Button to={RoutePaths.ALL_HISTORY} className={cls.button} theme={'gray'}>
            Смотреть все
          </Button>
        }
      />
    </div>
  );
};
