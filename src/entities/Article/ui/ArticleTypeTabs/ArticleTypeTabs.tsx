import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { cn } from '@/shared/lib/classNames/classNames';
import Tabs, { TabItem } from '@/shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: 'ALL',
        content: t('Все статьи'),
      },
      {
        value: 'IT',
        content: t('Айти'),
      },
      {
        value: 'ECONOMICS',
        content: t('Экономика'),
      },
      {
        value: 'SCIENCE',
        content: t('Наука'),
      },
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} className={cn('', {}, [className])} />;
};

export default memo(ArticleTypeTabs);
