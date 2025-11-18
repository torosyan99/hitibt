import type { Steps } from '../../types';

import cls from './Line.module.css';

interface LineProps {
  activeStep: number;
  steps: Steps;
}

export const Line = ({ activeStep, steps }: LineProps) => {
  return (
    <div className={cls.steps}>
      <div className={cls.line}>
        <div className={cls.innerLine} style={{ width: `${(activeStep / steps.length) * 100}%` }} />
      </div>
      <span className={cls.stepNum}>{activeStep} из {steps.length}</span>
    </div>
  );
};
