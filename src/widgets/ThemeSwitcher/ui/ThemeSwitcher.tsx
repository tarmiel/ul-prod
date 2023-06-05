import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={cn(styles.ThemeSwitcher, {}, [className])} theme={'clear'} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
