import React, { FC, HTMLAttributeAnchorTarget, useCallback } from 'react';
import styles from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import Icon from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import Card from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';

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
            <AppLink target={target} to={RoutePath.article_details + article.id}>
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
      to={RoutePath.article_details + article.id}
      className={cn(styles.ArticleListItem, {}, [className, styles[view]])}
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={article.img} alt={article.title} />
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
