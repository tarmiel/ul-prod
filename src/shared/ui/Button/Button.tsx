import React, { FC, ButtonHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'outlineInverted' | 'background' | 'backgroundInverted' | 'clearInverted';
type ButtonSize = 'medium' | 'large' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<IButtonProps> = ({
  theme = 'clear',
  size = 'medium',
  type = 'button',
  square,
  className,
  children,
  disabled,
  ...otrProps
}) => {
  return (
    <button
      type={type}
      className={cn(styles.Button, { [styles.square]: square, [styles.disabled]: disabled }, [
        className,
        styles[theme],
        styles[size],
      ])}
      disabled={disabled}
      {...otrProps}
    >
      {children}
    </button>
  );
};
