import { Box } from '@/shared/ui/Box/Box.tsx';
import CopyIcon from "@/shared/assets/images/copy.svg?react"

import cls from './Copy.module.css';

interface CopyProps {
  title: string;
  text: string;
}

export const Copy = ({ title, text }: CopyProps) => {
  const copy = () => navigator.clipboard.writeText(text);
  return (
    <Box>
      <h5>{title}</h5>
      <div className={cls.block}>
        <p className={cls.text}>
          {text}</p>
        <button className={cls.button} onClick={copy}>
          <CopyIcon />
        </button>
      </div>
    </Box>
  );
};
