import { useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { Stepper } from '@/features/Stepper';

import DownloadIcon from '@/shared/assets/images/download.svg?react';
import QRIcon from '@/shared/assets/images/qr.svg?react';
import ReadyIcon from '@/shared/assets/images/ready-icon.svg?react';
import TVIcon from '@/shared/assets/images/tv.svg?react';
import { RoutePaths } from '@/shared/config/routesConfig/routesPaths.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import cls from './ConnectionTV.module.css';

export const ConnectionTV = () => {
  const navigate = useNavigate();
  const backHome = () => navigate(RoutePaths.MAIN);
  const steps = useMemo(
    () => [
      {
        Icon: <DownloadIcon />,
        text: 'Установите на телевизор из Google Play Store приложении Happ',
      },
      {
        Icon: <TVIcon />,
        text: 'Откройте приложение и выберите “Поделиться через Веб”',
      },
      {
        Icon: <QRIcon />,
        text: 'Нажмите кнопку “Сканировать QR-код” и наведите камеру на телевизор',
        children: (
          <Button className={cls.button} theme={'blue'} size={'small'}>
            Сканировать QR-код
          </Button>
        ),
      },
      {
        Icon: <ReadyIcon />,
        text: 'VPN на телевизоре настроен и готов к использованию!',
      },
    ],
    []
  );
  return <section>
  <Stepper steps={steps} firstBackFn={backHome} backFn={backHome} />
  </section>
};
