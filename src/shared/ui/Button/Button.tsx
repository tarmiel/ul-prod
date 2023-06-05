import React, { FC, ButtonHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted';
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
  ...otrProps
}) => {
  return (
    <button
      type={type}
      className={cn(styles.Button, { [styles.square]: square }, [className, styles[theme], styles[size]])}
      {...otrProps}
    >
      {children}
    </button>
  );
};
