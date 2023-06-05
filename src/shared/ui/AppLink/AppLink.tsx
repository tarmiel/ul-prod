import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: 'primary' | 'secondary';
}

export const AppLink: FC<IAppLinkProps> = ({ className, theme = 'primary', children, ...otrProps }) => {
  return (
    <Link className={cn(styles.AppLink, {}, [className, styles[theme]])} {...otrProps}>
      {children}
    </Link>
  );
};
