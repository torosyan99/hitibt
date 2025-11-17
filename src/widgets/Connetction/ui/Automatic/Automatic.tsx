import { Box } from '@/shared/ui/Box/Box.tsx';

import cls from './Automatic.module.css';
import {useEffect} from "react";

interface AutomaticProps {
  setShowQuiz: (showQuiz: boolean) => void;
}

export const Automatic = ({ setShowQuiz }: AutomaticProps) => {

  useEffect(() => {
  setShowQuiz(true);

  }, []);
  return <Box className={cls.automatic}>

  </Box>;
};
