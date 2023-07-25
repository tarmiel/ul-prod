import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

type TextSize = 'small' | 'medium' | 'large';

interface ITextProps {
  title?: string;
  className?: string;
  theme?: 'primary' | 'inverted' | 'error';
  align?: 'left' | 'right' | 'center';
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  small: 'h3',
  medium: 'h2',
  large: 'h1',
};

export const Text: FC<ITextProps> = ({
  title,
  children,
  className,
  theme = 'primary',
  align = 'left',
  size = 'medium',
  ...otrProps
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];
  return (
    <div className={cn(styles.Text, {}, [className, styles[theme], styles[align], styles[size]])} {...otrProps}>
      {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
      {children && <p className={styles.text}>{children}</p>}
    </div>
  );
};
