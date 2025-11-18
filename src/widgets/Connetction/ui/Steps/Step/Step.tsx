import cls from './Step.module.css'
import type {ReactNode} from "react";

interface StepProps {
  FirstButton:ReactNode,
  SecondButton:ReactNode,
}

export const Step = ({FirstButton, SecondButton }:StepProps) => {
  return (
    <div className={cls.step}>
      <div className={cls.buttons}>
        {FirstButton}
        <span>или</span>
        {SecondButton}
      </div>
      <p className={cls.text}>
        Скопируйте конфигурацию и вставьте ее в приложение Happ вручную
      </p>

    </div>
  );
};
