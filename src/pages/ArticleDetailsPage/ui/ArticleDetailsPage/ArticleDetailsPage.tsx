import { FC, memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className={cn(styles.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</div>;
  }

  return (
    <div className={cn(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
