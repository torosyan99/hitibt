import { UserCard } from '@/entities/UserCard';

import { Navigation } from '../Navigation/Navigation.tsx';

import cls from './HomeMenu.module.css';

export const HomeMenu = () => {
  return (
    <section className={cls.menu}>
      <UserCard type={'has-ended'} status={'Трафик: 0.1 Гб'} />
      <Navigation />
    </section>
  );
};
