import { useReducer, useState } from 'react';

import { Details } from '@/features/Pay/ui/Details/Details.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';

import { detailsConfig } from '../../config/detailsConfig.tsx';
import { reducer } from '../../model/reducer.tsx';
import { Answer } from '../Answer/Answer.tsx';
import { Email } from '../Email/Email.tsx';
import { Slider } from '../../../Slider/ui/Slider.tsx';

import cls from './Pay.module.css';

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const initialState = {
  devices: 3,
  details: detailsConfig[0],
  email: {
    text: '',
    error: false,
  },
};
export const Pay = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = () => {
    if (!isValidEmail(state.email.text)) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: true });
      return;
    }

    console.log(state)

    setIsOpen(true);
  };

  return (
    <div className={cls.pay}>
      <Slider setState={(v) => dispatch({ type: 'SET_DEVICES', payload: v })} />
      <Details setState={(v) => dispatch({ type: 'SET_PERIOD', payload: v })} />
      <Email
        state={state.email.text}
        error={state.email.error}
        setState={(v) => dispatch({ type: 'SET_EMAIL', payload: v })}
      />
      <Answer state={state} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Button size={'large'} theme={'blue'} onClick={onSubmit}>
        <span>Оплатить {state.details.price}</span>
      </Button>
    </div>
  );
};
