import { useState } from 'react';

import { ConnectionStepper } from '@/widgets/Connetction/ui/ConnectionStepper/ConnectionStepper.tsx';

import { Automatic } from '../Automatic/Automatic.tsx';
import { Manual } from '../Manual/Manual.tsx';

import cls from './Connection.module.css';

export const Connection = () => {
  const [showStepper, setShowStepper] = useState(false);

  return (
    <section className={cls.connection}>
      {showStepper ? (
        <ConnectionStepper setShowStepper={setShowStepper} />
      ) : (
        <>
          <Automatic setShowStepper={setShowStepper} />
          <Manual />
        </>
      )}
    </section>
  );
};
