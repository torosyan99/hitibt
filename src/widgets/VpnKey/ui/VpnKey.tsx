import { Box } from '@/shared/ui/Box/Box.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';

import cls from './VpnKey.module.css';
import {Button} from "@/shared/ui/Button/Button.tsx";

export const VpnKey = () => {
  const copy = () => navigator.clipboard.writeText('        happ://crypt3/eGzWJ+xsnClu/9ZmOkNZdjOOgsR3u3DHMzL3g0rxKU42YCtDvS6Vu5xLb7LvGhSnXG/5LozW26CcNX11NTqP5cQ3yNRw4nct402y8x7gfo65if2WLjxhhmoMOv6B0q')
  return (
    <Box>
      <h5>Ваш личный VPN ключ</h5>
      <Text className={cls.text} type={'gray'} size={'small'}>
        Вы можете настроить VPN вручную, для этого скопируйте ключ и вставьте в приложение.
      </Text>
      <div className={cls.innerBox}>
        happ://crypt3/eGzWJ+xsnClu/9ZmOkNZdjOOgsR3u3DHMzL3g0rxKU42YCtDvS6Vu5xLb7LvGhSnXG/5LozW26CcNX11NTqP5cQ3yNRw4nct402y8x7gfo65if2WLjxhhmoMOv6B0q
      </div>
      <Button theme={'blue'} size={'small'} onClick={copy}>
        Скопировать ключ
      </Button>
    </Box>
  );
};
