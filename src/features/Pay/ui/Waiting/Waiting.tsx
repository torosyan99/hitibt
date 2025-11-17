import { Link } from 'react-router-dom';
import cls from './Waiting.module.css'


import ExportIcon from '@/shared/assets/images/export-icon.svg?react';
import LoadIcon from '@/shared/assets/images/load.svg?react';
import {Button} from "@/shared/ui/Button/Button.tsx";

export const Waiting = () => {
  return (
    <div>
      <h5>Ожидание оплаты</h5>
      <Link className={cls.link} to={'#'}>
        Оплата счета в сервисе ЮКасса <ExportIcon />{' '}
      </Link>
      <LoadIcon className={cls.load} />
      <Button size={'large'} theme={'blue'}>Перейти на форму оплаты</Button>
    </div>
  );
};
