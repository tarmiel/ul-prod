import React, { CSSProperties, FC, memo } from 'react';
import styles from './Skeleton.module.scss';
import { cn } from 'shared/lib/classNames/classNames';

interface ISkeletonProps extends Pick<CSSProperties, 'width' | 'height' | 'borderRadius'> {
  className?: string;
}

const Skeleton: FC<ISkeletonProps> = ({ width, height, borderRadius, className }) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div className={cn(styles.Skeleton, {}, [className])} style={style} />;
};

export default memo(Skeleton);
