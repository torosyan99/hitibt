import { Box } from '@/shared/ui/Box/Box.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';

import cls from './Email.module.css';

interface EmailProps {
  state: string;
  setState: (state: string) => void;
  error: boolean;
}

export const Email = ({ state, setState, error }: EmailProps) => {
  const onClick = () => setState('12345566@t.me');
  return (
    <div className={cls.wrapper}>
      <Box>
        <span className={cls.title}>Ваш Emal</span>
        <Input
          state={state}
          setState={setState}
          right={<button className={cls.right} onClick={onClick}>ЧЕК НЕ НУЖЕН</button>}
          placeholder={'mail@mail.ru'}
        />
      </Box>
      {error && <p className={cls.error}>Неверный адрес электронной почты</p>}
    </div>
  );
};
