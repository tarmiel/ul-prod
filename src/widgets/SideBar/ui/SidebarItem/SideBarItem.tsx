import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ISideBarItem } from '../../model/items';
import styles from './SideBarItem.module.scss';
import { cn } from 'shared/lib/classNames/classNames';

interface ISideBarItemProps {
  item: ISideBarItem;
  collapsed?: boolean;
}

const SideBarItem: FC<ISideBarItemProps> = ({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <AppLink theme="secondary" to={item.path} className={cn(styles.item, { [styles.collapsed]: collapsed })}>
      <item.icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
};

export default SideBarItem;
