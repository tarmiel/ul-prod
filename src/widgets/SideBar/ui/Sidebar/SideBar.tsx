import React, { FC, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import styles from './SideBar.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { useTranslation } from 'react-i18next';

const SideBar: FC = ({}) => {
  const { t } = useTranslation();
  const [isCollapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div data-testid="sidebar" className={cn(styles.SideBar, { [styles.collapsed]: isCollapsed }, [])}>
      <Button
        data-testid={'sidebar-toggle'}
        className={styles.collapseBtn}
        onClick={onToggle}
        theme="backgroundInverted"
        size="large"
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink theme="primary" to={RoutePath.main} className={styles.item}>
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink theme="primary" to={RoutePath.about} className={styles.item}>
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={styles.lang} />
      </div>
    </div>
  );
};

export default SideBar;
