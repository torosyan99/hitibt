import {type ReactNode, useState} from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Switcher.module.css';

interface Param {
  buttonTitle: string;
  Component: ReactNode;
}

interface SwitcherProps {
  params: [Param, Param];
}

export const Switcher = ({ params }: SwitcherProps) => {
  const [index, setIndex] = useState(0);
  const onClickLeft = () => setIndex(0);
  const onClickRight = () => setIndex(1);
  return (
    <>
      <div
        className={classNames(cls.switcher, [], {
          [cls.left]: !!index,
        })}
      >
        <button className={cls.button} onClick={onClickLeft}>
          {params[0].buttonTitle}
        </button>
        <button className={cls.button} onClick={onClickRight}>
          {params[1].buttonTitle}
        </button>
      </div>
      {params[index].Component}
    </>
  );
};
