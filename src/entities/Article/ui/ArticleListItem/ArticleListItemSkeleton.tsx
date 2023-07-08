import React, { FC, memo } from 'react';
import styles from './ArticleListItem.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import Card from 'shared/ui/Card/Card';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

interface IArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton: FC<IArticleListItemSkeletonProps> = ({ view, className }) => {
  if (view === 'big') {
    return (
      <div className={cn(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton borderRadius="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={200} className={styles.img} />
          <div className={styles.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
};

export default memo(ArticleListItemSkeleton);
