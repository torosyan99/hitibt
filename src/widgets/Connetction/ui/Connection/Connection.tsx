import { useState } from 'react';

import { Automatic } from '../Automatic/Automatic.tsx';
import { Manual } from '../Manual/Manual.tsx';

import cls from './Connection.module.css';

export const Connection = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <section className={cls.connection}>
      {showQuiz ? (
        <></>
      ) : (
        <>
          <Automatic setShowQuiz={setShowQuiz} />
          <Manual />
        </>
      )}
    </section>
  );
};
