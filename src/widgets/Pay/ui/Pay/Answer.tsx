import { useState } from 'react';

import { Info } from '@/widgets/Pay/ui/Info/Info.tsx';
import { Waiting } from '@/widgets/Pay/ui/Waiting/Waiting.tsx';

import { BottomSheet } from '@/shared/ui/BottomSheet/BottomSheet.tsx';

import type { State } from '../../types';

interface AnswerProps {
  isOpen: boolean;
  state: State;
  onClose: () => void;
}

export const Answer = ({ isOpen, onClose, state }: AnswerProps) => {
  const [waiting, setWaiting] = useState(false);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      {!waiting ? <Info state={state} onClick={() => setWaiting(true)} /> : <Waiting />}
    </BottomSheet>
  );
};
