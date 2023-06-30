import { FC, memo, useMemo, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { SideBarItemsList } from '../../model/items';
import SideBarItem from '../SidebarItem/SideBarItem';
import styles from './SideBar.module.scss';

const SideBar: FC = ({}) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(() => {
    return SideBarItemsList.map((item) => <SideBarItem item={item} key={item.path} collapsed={isCollapsed} />);
  }, [isCollapsed]);

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
      <div className={styles.items}>{itemsList}</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={styles.lang} />
      </div>
    </div>
  );
};

export default memo(SideBar);
