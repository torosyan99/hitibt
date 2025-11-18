import { useState } from 'react';

import { Box } from '@/shared/ui/Box/Box.tsx';
import { IconTitleText } from '@/shared/ui/IconTitleText/IconTitleText.tsx';

import type { StepperProps } from '../../types';
import { Buttons } from '../Buttons/Buttons.tsx';
import { Line } from '../Line/Line.tsx';

import cls from './Stepper.module.css';

export const Stepper = ({ steps, firstBackFn, backFn }: StepperProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const activeStep = stepIndex + 1;

  return (
    <div className={cls.stepper}>
      <Line steps={steps} activeStep={activeStep} />
      <Box className={cls.box}>
        <IconTitleText
          title={steps.length === stepIndex + 1 ? 'Готово!' : 'Шаг ' + activeStep}
          text={steps[stepIndex].text}
          Icon={steps[stepIndex].Icon}
        />
        {steps[stepIndex].children}
      </Box>

      <Buttons
        setStepIndex={setStepIndex}
        stepIndex={stepIndex}
        firstBackFn={firstBackFn}
        backFn={backFn}
        steps={steps}
      />
    </div>
  );
};
