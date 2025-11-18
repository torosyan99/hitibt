import cls from './ManualMenu.module.css'
import {Navigation} from "../Navigation/Navigation.tsx";

export const ManualMenu = () => {
  return (
    <section className={cls.menu}>
     <Navigation />
    </section>
  );
};
