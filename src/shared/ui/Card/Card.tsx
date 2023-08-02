import React, { FC, ReactNode, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './Card.module.scss';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: 'normal' | 'outlined';
  max?: boolean;
}

const Card: FC<ICardProps> = ({ children, className, theme = 'normal', max, ...otrProps }) => {
  return (
    <div className={cn(styles.Card, { [styles.max]: max }, [className, styles[theme]])} {...otrProps}>
      {children}
    </div>
  );
};

export default memo(Card);
