import { UserCardWithAvatar } from '@/entities/UserCard/ui/UserCard/UserCardWithAvatar.tsx';
import photo from '@/shared/assets/images/photo.png';
import {Navigation} from "../Navigation/Navigation.tsx";
import {Copy} from "@/shared/ui/Сopy/Copy.tsx";


export const Profile = () => {
  return (
    <section>
      <UserCardWithAvatar
        type={'working'}
        url={photo}
        status={'Подписка: активна'}
        name={'Yura Streltsov'}
        id={'208789811'}
      />
      <Navigation />
      <Copy title={'Ссылка на ключ для ручного ввода:'} text={'https://t.me/StarsotekaBotStarsotekaBot'} />
    </section>
  );
};
