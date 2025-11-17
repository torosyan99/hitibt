import  { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

import type { LinkProps } from 'react-router-dom';

type CommonProps = {
  size?:'none' | 'small' | 'medium' | 'large';
  theme?: 'primary' | 'blue' | 'gray';
  className?: string;
};

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps & { to?: never };
type ButtonAsLink =  LinkProps &  CommonProps  ;

export type ButtonProps = PropsWithChildren<ButtonAsLink | ButtonAsButton>;

export function isLinkProps(p: Partial<ButtonProps>): p is ButtonAsLink {
  return typeof (p as ButtonAsLink).to === 'string';
}

export function isButtonProps(p: Partial<ButtonProps>): p is ButtonAsButton {
  return typeof (p as ButtonProps).to !== 'string';
}