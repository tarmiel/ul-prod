import { CSSProperties, useMemo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import UserIcon from '../../assets/icons/user-filled.svg';
import { AppImage } from '../AppImage';
import Icon from '../Icon/Icon';
import Skeleton from '../Skeleton/Skeleton';

import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={style}
      className={cn(styles.Avatar, {}, [className])}
    />
  );
};
