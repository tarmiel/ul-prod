import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: 'createdAt',
        content: t('дате создания'),
      },
      {
        value: 'title',
        content: t('названию'),
      },
      {
        value: 'views',
        content: t('просмотрам'),
      },
    ],
    [t]
  );

  return (
    <div className={cn(cls.ArticleSortSelector, {}, [className])}>
      <Select options={sortFieldOptions} label={t('Сортировать ПО')} value={sort} onChange={onChangeSort} />
      <Select options={orderOptions} label={t('по')} value={order} onChange={onChangeOrder} className={cls.order} />
    </div>
  );
};

export default memo(ArticleSortSelector);
