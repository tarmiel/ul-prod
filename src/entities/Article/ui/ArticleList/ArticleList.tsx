import React, { FC, HTMLAttributeAnchorTarget } from 'react';

import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

import styles from './ArticleList.module.scss';



interface IArticleListProps {
  className?: string;
  isLoading?: boolean;
  articles: Article[];
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'small' ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={styles.card} key={index} view={view} />);

const ArticleList: FC<IArticleListProps> = ({ articles, view = 'small', isLoading, target, className }) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} target={target} />;
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={cn(styles.ArticleList, {}, [className, styles[view]])}>
        <Text size={'large'} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <div className={cn(styles.ArticleList, {}, [className, styles[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export default ArticleList;
