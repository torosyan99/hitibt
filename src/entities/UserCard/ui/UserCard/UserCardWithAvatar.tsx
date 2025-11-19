import { Bottom } from '@/entities/UserCard/ui/Bottom/Bottom.tsx';

import CopyIcon from '@/shared/assets/images/copy.svg?react';
import noPhoto from '@/shared/assets/images/no-photo.png';
import { Box } from '@/shared/ui/Box/Box.tsx';

import { userCardConfig } from '../../config/userCardConfig.tsx';
import type { UserCardWithAvatarProps } from '../../types';

import cls from './UserCard.module.css';

export const UserCardWithAvatar = ({ type, status, url, name, id }: UserCardWithAvatarProps) => {
  const { to } = userCardConfig[type];

  const copy = () => navigator.clipboard.writeText(id);
  return (
    <div className={cls.card}>
      <Box bottomText={'15% кешбек за рефералов пожизненно'}>
        <div className={cls.user}>
          <img className={cls.img} src={url || noPhoto} alt={'user'} />
          <h5 className={cls.name}>{name}</h5>
          <div className={cls.id}>
            <span> Id: {id}</span>
            <button className={cls.copy} onClick={copy}>
              <CopyIcon width={16} height={16} />
            </button>
          </div>
        </div>
        <Bottom status={status} to={to} />
      </Box>
    </div>
  );
};
