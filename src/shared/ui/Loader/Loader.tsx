import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './Loader.module.scss';

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
