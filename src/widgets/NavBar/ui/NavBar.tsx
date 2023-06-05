import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

interface INavBarProps {
  className?: string;
}

const NavBar: FC<INavBarProps> = ({ className }) => {
  return (
    <div className={cn(styles.NavBar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={RoutePath.main}>Главная</AppLink>
        <AppLink to={RoutePath.about}>О сайте</AppLink>
      </div>
    </div>
  );
};

export default NavBar;
