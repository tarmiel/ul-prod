import { CSSProperties, useMemo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return <img src={src} alt={alt} style={style} className={cn(styles.Avatar, {}, [className])} />;
};
