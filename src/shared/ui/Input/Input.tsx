import type { ChangeEvent, InputHTMLAttributes } from 'react';

import CloseCircleIcon from '@/shared/assets/images/close-circle.svg?react';

import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setState: (email: string) => void;
  state: string;
  tablet?: string;
}

export const Input = ({ tablet, state, setState, ...others }: InputProps) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value);
  const handleClick = () => setState('');

  return (
    <div className={cls.wrapper}>
      <input className={cls.input} onChange={onChange} value={state} {...others} />
      {tablet && state.length === 0 && <div className={cls.tablet}> {tablet} </div>}
      {state.length > 0 && (
        <button className={cls.delete} onClick={handleClick}>
          <CloseCircleIcon />
        </button>
      )}
    </div>
  );
};
