import { FC, HTMLAttributeAnchorTarget } from 'react';

import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button } from '@/shared/ui/Button/Button';
import Card from '@/shared/ui/Card/Card';
import Icon from '@/shared/ui/Icon/Icon';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';

import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticleListItem.module.scss';

interface IArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem: FC<IArticleListItemProps> = ({ article, view, target, className }) => {
  const { t } = useTranslation('articles');

  const types = <Text className={styles.types}>{article.type.join(', ')}</Text>;
  const views = (
    <>
      <Text className={styles.viewsCount}>{String(article.views)}</Text>
      <Icon Svg={EyeIcon} className={styles.viewsImg} />
    </>
  );

  if (view === 'big') {
    const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;

    return (
      <div className={cn(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={styles.username}>{article.user.username}</Text>
            <Text className={styles.date}>{article.createdAt}</Text>
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <img className={styles.img} src={article.img} alt={article.title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />}
          <div className={styles.footer}>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button theme="outline">{t('Читать далее...')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }
  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={cn(styles.ArticleListItem, {}, [className, styles[view]])}
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <AppImage
            fallback={<Skeleton width="100%" height={200} />}
            src={article.img}
            className={styles.img}
            alt={article.title}
          />
          <Text className={styles.date}>{article.createdAt}</Text>
        </div>
        <div className={styles.infoWrapper}>
          {types}
          <div className={styles.views}>{views}</div>
        </div>
        <Text className={styles.title}>{article.title}</Text>
      </Card>
    </AppLink>
  );
};

export default ArticleListItem;
