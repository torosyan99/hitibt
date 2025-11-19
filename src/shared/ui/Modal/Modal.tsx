import { type PropsWithChildren, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import CloseCircleIcon from '@/shared/assets/images/close-circle.svg?react';
import { classNames } from '@/shared/libs/classNames/classNames.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';

import cls from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
  const [showed, setShowed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-overflow');
      const timeout = setTimeout(() => setShowed(true), 100);
      return () => {
        document.body.classList.remove('body-overflow');
        clearTimeout(timeout);
        setShowed(false); // сброс для повторного открытия
      };
    }
  }, [isOpen]);

  const close = () => {
    setShowed(false);
    setTimeout(onClose, 200);
  };

  if (!isOpen) return null;
  return createPortal(
    <div
      className={classNames(cls.overlay, [], {
        [cls.open]: isOpen,
      })}
      onClick={close}
    >
      <Box
        className={classNames(cls.content, [], {
          [cls.showed]: showed,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={cls.close} onClick={close}>
          <CloseCircleIcon />
        </button>
        {children}
      </Box>
    </div>,
    document.body
  );
};
