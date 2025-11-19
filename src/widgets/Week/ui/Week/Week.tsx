import { RightText } from '@/entities/RightsText';

import WeekIcon from '@/shared/assets/images/week.svg?react';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { IconTitleText } from '@/shared/ui/IconTitleText/IconTitleText.tsx';
import { Warning } from '@/shared/ui/Warning/Warning.tsx';

import { Buttons } from '../Buttons/Buttons.tsx';

import cls from './Week.module.css';

export const Week = () => {
  return (
    <section>
      <Box padding={'v-2'}>
        <IconTitleText
          title={'Акционый тариф'}
          text={
            <>
              Не хотим Вас терять ❤️
              <br /> Продолжайте пользоваться сервисом по специальной цене.
            </>
          }
          Icon={<WeekIcon />}
        />
        <Buttons />
      </Box>
      <Warning className={cls.warning} theme={'gray'}>
        На аукционном тарифе VPN будет работать только на 1 устройстве.
      </Warning>
      <RightText />
    </section>
  );
};
