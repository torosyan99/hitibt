import { useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { FirstStep } from '@/widgets/Connetction/ui/Steps/FirstStep/FirstStep.tsx';
import { Step } from '@/widgets/Connetction/ui/Steps/Step/Step.tsx';

import { Stepper } from '@/features/Stepper';

import DownLoadIcon from '@/shared/assets/images/download.svg?react';
import ReadyIcon from '@/shared/assets/images/ready-icon.svg?react';
import SettingIcon from '@/shared/assets/images/setting-2.svg?react';
import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

interface ConnectionStepperProps {
  setShowStepper: (showStepper: boolean) => void;
}

export const ConnectionStepper = ({ setShowStepper }: ConnectionStepperProps) => {
  const navigate = useNavigate();

  const copy = () => navigator.clipboard.writeText('copy!');

  const steps = useMemo(
    () => [
      {
        Icon: <DownLoadIcon />,
        text: 'Установите приложении Happ на ваше устройство (macOS)',
        children: <FirstStep />,
      },
      {
        Icon: <SettingIcon />,
        text: 'Нажмите на кнопку для автоматической настройки VPN',
        children: (
          <Step
            FirstButton={
              <Button theme={'blue'} size={'small'} to={'#'}>
                Автоматическая настройка
              </Button>
            }
            SecondButton={
              <Button theme={'gray'} size={'small'} onClick={copy}>
                Скопировать конфигурацию
              </Button>
            }
          />
        ),
      },
      {
        Icon: <ReadyIcon />,
        text: 'Ваше приложение настроено и готово к использованию!',
        children: (
          <Step
            FirstButton={
              <Button theme={'blue'} size={'small'} to={'https://www.youtube.com/'}>
                Смотреть YouTube
              </Button>
            }
            SecondButton={
              <Button theme={'gray'} size={'small'} to={'https://chatgpt.com/'}>
                Попробовать ChatGPT
              </Button>
            }
          />
        ),
      },
    ],
    []
  );

  return (
    <Stepper
      firstBackFn={() => setShowStepper(false)}
      backFn={() => navigate(RoutePaths.MAIN)}
      steps={steps}
    />
  );
};
