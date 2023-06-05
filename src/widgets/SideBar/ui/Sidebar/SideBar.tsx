import React, { FC, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import styles from './SideBar.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';

const SideBar: FC = ({}) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div data-testid="sidebar" className={cn(styles.SideBar, { [styles.collapsed]: isCollapsed }, [])}>
      <Button data-testid={'sidebar-toggle'} onClick={onToggle}>
        |||
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};

export default SideBar;
