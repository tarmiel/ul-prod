import React, { FC, ReactNode, memo } from 'react';
import styles from './Card.module.scss';
import { cn } from 'shared/lib/classNames/classNames';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card: FC<ICardProps> = ({ children, className, ...otrProps }) => {
  return (
    <div className={cn(styles.Card, {}, [className])} {...otrProps}>
      {children}
    </div>
  );
};

export default memo(Card);
