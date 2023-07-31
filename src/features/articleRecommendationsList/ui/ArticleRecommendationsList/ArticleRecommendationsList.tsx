import { ArticleList } from 'entities/Article';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface IArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> = ({ className }) => {
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={className}>
      <Text size="large" title={t('Рекомендуем')} />
      <ArticleList articles={articles} target="_blank" isLoading={isLoading} />
    </VStack>
  );
};
