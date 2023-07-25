import { FC, memo, useMemo, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import SideBarItem from '../SidebarItem/SideBarItem';
import styles from './SideBar.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getSideBarItems } from 'widgets/SideBar/model/selectors/getSideBarItems';
import { VStack } from 'shared/ui/Stack';

const SideBar: FC = ({}) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const sideBarItemsList = useSelector(getSideBarItems);
  const auth = useSelector(getUserAuthData);

  const onToggle = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(() => {
    return sideBarItemsList.map((item) => {
      if (!item.authOnly || auth) {
        return <SideBarItem item={item} key={item.path} collapsed={isCollapsed} />;
      }
    });
  }, [auth, isCollapsed, sideBarItemsList]);

  return (
    <aside data-testid="sidebar" className={cn(styles.SideBar, { [styles.collapsed]: isCollapsed }, [])}>
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
      <VStack role="navigation" gap="8" className={styles.items}>
        {itemsList}
      </VStack>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={styles.lang} />
      </div>
    </aside>
  );
};

export default memo(SideBar);
