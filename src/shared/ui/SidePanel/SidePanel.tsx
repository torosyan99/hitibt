import {type ReactNode, useEffect} from 'react';

import { classNames } from '@/shared/libs/classNames/classNames.ts';

import cls from './SidePanel.module.css';

interface SidePanelProps {
  children: ReactNode;
  isOpen: boolean;
}

export const SidePanel = ({ children, isOpen }: SidePanelProps) => {

  useEffect(() => {
    if(isOpen) {
      document.body.classList.add('body-overflow');
    }else {
      document.body.classList.remove('body-overflow');
    }
  }, [isOpen]);


  return (
    <div
      className={classNames(cls.panel, [], {
        [cls.open]: isOpen,
      })}
    >
      {children}
    </div>
  );
};
