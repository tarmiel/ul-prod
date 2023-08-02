import React, { FC, ButtonHTMLAttributes } from 'react';

import { Mods, cn } from '@/shared/lib/classNames/classNames';

import styles from './Button.module.scss';

type ButtonTheme =
  | 'clear'
  | 'outline'
  | 'outlineInverted'
  | 'background'
  | 'backgroundInverted'
  | 'clearInverted'
  | 'outline_red';
type ButtonSize = 'medium' | 'large' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
  full?: boolean;
}

export const Button: FC<IButtonProps> = ({
  theme = 'clear',
  size = 'medium',
  type = 'button',
  square,
  className,
  children,
  disabled,
  full,
  ...otrProps
}) => {
  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
    [styles.full]: full,
  };
  return (
    <button
      type={type}
      className={cn(styles.Button, mods, [className, styles[theme], styles[size]])}
      disabled={disabled}
      {...otrProps}
    >
      {children}
    </button>
  );
};
