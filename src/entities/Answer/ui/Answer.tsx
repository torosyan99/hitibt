import { getIconByType } from '@/entities/Answer/libs/getIconByType/getIconByType.tsx';

import { classNames } from '@/shared/libs/classNames/classNames.ts';
import { Text } from '@/shared/ui/Text/Text.tsx';

import type { AnswerProps } from '../types';

import cls from './Answer.module.css';

export const Answer = ({ type, text, title, className }: AnswerProps) => {
  const Icon = getIconByType(type);
  return (
    <div className={classNames(cls.answer, [className])}>
      {Icon}
      <h5 className={cls.title}>{title}</h5>
      <Text className={cls.text} size={'small'} type={'gray'}>
        {text}
      </Text>
    </div>
  );
};
