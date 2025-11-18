import { UserCard } from '@/entities/UserCard';

import { Navigation } from '../Navigation/Navigation.tsx';


export const HomeMenu = () => {
  return (
    <section>
      <UserCard type={'has-ended'} status={'Трафик: 0.1 Гб'} />
      <Navigation />
    </section>
  );
};