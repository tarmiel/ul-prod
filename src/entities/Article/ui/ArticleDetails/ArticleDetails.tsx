import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Icon from 'shared/ui/Icon/Icon';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticlebyId/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleSlice';
import { ArticleBlock } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<IArticleDetailsProps> = ({ id }) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlocks = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case 'TEXT':
      return <ArticleTextBlockComponent key={block.id} block={block} className={styles.block} />;
      break;
    case 'CODE':
      return <ArticleCodeBlockComponent key={block.id} block={block} className={styles.block} />;
      break;
    case 'IMAGE':
      return <ArticleImageBlockComponent key={block.id} block={block} className={styles.block} />;
      break;

    default:
      return null;
      break;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = <Text align={'center'} title={t('Произошла ошибка при загрузке статьи.')} theme="error" />;
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </div>
        <Text className={styles.title} title={article?.title} size="large">
          {article?.subtitle}
        </Text>
        <div className={styles.articleInfo}>
          <Icon className={styles.icon} Svg={EyeIcon} />
          <Text>{String(article?.views)}</Text>
        </div>
        <div className={styles.articleInfo}>
          <Icon className={styles.icon} Svg={CalendarIcon} />
          <Text>{article?.createdAt}</Text>
        </div>
        {article?.blocks.map(renderBlocks)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={styles.ArticleDetails}>{content}</div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
