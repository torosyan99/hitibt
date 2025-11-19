import { Box } from '@/shared/ui/Box/Box.tsx';
import { Text } from '@/shared/ui/Text/Text.tsx';
import { Copy } from '@/shared/ui/Сopy/Copy.tsx';

import { Info } from '../Info/Info.tsx';
import { PartnershipHistory } from '../PartnershipHistory/PartnershipHistory.tsx';

import cls from './Partnership.module.css';

export const Partnership = () => {
  return (
    <section className={cls.partnership}>
      <Box className={cls.box}>
        <Text className={cls.text}>
          За каждого приглашенного друга вы получите бонусные <span>15% рублями</span> со всех его
          платежей.
        </Text>
        <Text>
          Например: если ваш друг купит подписку на 1 год, вы получите 322 бонусных рубля.{' '}
        </Text>
        <Info />
      </Box>
      <Copy title={'Ваша реферальная ссылка:'} text={'https://t.me/StarsotekaBotStarsotekaBot'} />
      <PartnershipHistory />
    </section>
  );
};
