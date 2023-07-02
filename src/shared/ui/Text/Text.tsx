import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

interface ITextProps {
  title?: string;
  className?: string;
  theme?: 'primary' | 'error';
  align?: 'left' | 'right' | 'center';
}

export const Text: FC<ITextProps> = ({
  title,
  children,
  className,
  theme = 'primary',
  align = 'left',
  ...otrProps
}) => {
  return (
    <div className={cn(styles.Text, {}, [className, styles[theme], styles[align]])} {...otrProps}>
      {title && <p className={styles.title}>{title}</p>}
      {children && <p className={styles.text}>{children}</p>}
    </div>
  );
};
