import { useState } from 'react';

import RcSlider from 'rc-slider';

import { classNames } from '@/shared/libs/classNames/classNames.ts';
import { TitleText } from '@/shared/ui/TitleText/TitleText.tsx';

import 'rc-slider/assets/index.css';
import './Slider.css';

const marks: { [key: number]: number } = {
  '6.5': 1,
  '16': 2,
  '29': 3,
  '50': 5,
  '93.5': 10,
};

interface SliderProps {
  setState: (value: number) => void;
}

export const Slider = ({ setState }: SliderProps) => {
  const [value, setValue] = useState(29);

  const handleChange = (value: number | number[]) => {
    if (typeof value === 'number') {
      if (value < 6.5) value = 6.5;
      if (value > 93.5) value = 93.5;
      setValue(value);
      setState(marks[value]);
    }
  };

  return (
    <div>
      {' '}
      <TitleText
        title={'Выберите кол-во устройств и период подписки'}
        text={`Кол-во устройств: 1 устройство`}
      />
      <RcSlider
        className={classNames('slider', [], {
          'max-reached': value === 93.5,
        })}
        min={0}
        max={100}
        marks={marks}
        included
        dots
        value={value}
        onChange={handleChange}
        step={null}
      />
    </div>
  );
};
