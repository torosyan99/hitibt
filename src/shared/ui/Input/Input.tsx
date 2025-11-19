import type {ChangeEvent, InputHTMLAttributes, ReactNode} from 'react';

import CloseCircleIcon from '@/shared/assets/images/close-circle.svg?react';

import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setState: (email: string) => void;
  state: string;
  right?: ReactNode;
}

export const Input = ({ right, state, setState, ...others }: InputProps) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value);
  const handleClick = () => setState('');

  return (
    <div className={cls.wrapper}>
      <input className={cls.input} onChange={onChange} value={state} {...others} />
      {right && state.length === 0 &&  right}
      {state.length > 0 && (
        <button className={cls.delete} onClick={handleClick}>
          <CloseCircleIcon />
        </button>
      )}
    </div>
  );
};
