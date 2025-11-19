import { Devices } from '@/entities/Devices/ui/Devices.tsx';

import ShieldIcon from '@/shared/assets/images/shield-b.svg?react';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { IconTitleText } from '@/shared/ui/IconTitleText/IconTitleText.tsx';

import cls from './Automatic.module.css';

interface AutomaticProps {
  setShowStepper: (showStepper: boolean) => void;
}

export const Automatic = ({ setShowStepper }: AutomaticProps) => {
  const handleClick = () => setShowStepper(true);
  return (
    <Box padding={'v-2'} className={cls.automatic}>
      <IconTitleText
        title={'Настройка на macOS'}
        text={'Автоматическая настройка VPN происходит в 3 шага и занимает пару минут'}
        Icon={<ShieldIcon />}
      />
      <Devices className={cls.devices} active={0} availableQuantity={1} />
      <div>
        <Button theme={'blue'} size={'small'} onClick={handleClick}>
          Настроить на этом устройстве
        </Button>
        <Button className={cls.button} theme={'gray'} size={'small'}>
          Настроить на Android TV
        </Button>
      </div>
    </Box>
  );
};
