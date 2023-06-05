import React, { FC } from 'react';
import styles from './Loader.module.scss';
import { cn } from 'shared/lib/classNames/classNames';

interface ILoaderProps {
  className?: string;
}

const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.Loader, {}, [className])}>
      <div></div>
    </div>
  );
};

export default Loader;
