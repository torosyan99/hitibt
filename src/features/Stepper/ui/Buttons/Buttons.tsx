import ArrowRight from '@/shared/assets/images/arrow-right.svg?react';
import { Button } from '@/shared/ui/Button/Button.tsx';

import type { StepperProps } from '../../types';

import cls from './Buttons.module.css';

interface ButtonProps extends StepperProps {
  stepIndex: number;
  setStepIndex: (index: number) => void;
}

export const Buttons = ({ stepIndex, firstBackFn, backFn, steps, setStepIndex }: ButtonProps) => {
  const back = () => {
    if (stepIndex === 0) {
      if (firstBackFn) firstBackFn();
      return;
    }
    setStepIndex(stepIndex - 1);
  };

  const next = () => {
    if (stepIndex === steps.length - 1) {
      if (backFn) backFn();
      return;
    }
    setStepIndex(stepIndex + 1);
  };

  return (
    <div className={cls.buttons}>
      <Button className={cls.button} onClick={back}>
        Назад
      </Button>
      <Button className={cls.button} theme="blue" onClick={next}>
        {steps.length - 1 === stepIndex ? (
          'Закрыть'
        ) : (
          <>
            Далее
            <ArrowRight />
          </>
        )}
      </Button>
    </div>
  );
};
