import React, { FC } from 'react';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { cn } from 'shared/lib/classNames/classNames';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface IArticleListProps {
  className?: string;
  isLoading?: boolean;
  articles: Article[];
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'small' ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={styles.card} key={index} view={view} />);

const ArticleList: FC<IArticleListProps> = ({ articles, view = 'small', isLoading, className }) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
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
