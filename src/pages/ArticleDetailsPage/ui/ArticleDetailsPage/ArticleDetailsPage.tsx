import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'widgets/Page/Page';
import styles from './ArticleDetailsPage.module.scss';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { VStack } from 'shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface IArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page className={cn(styles.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={cn(styles.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
