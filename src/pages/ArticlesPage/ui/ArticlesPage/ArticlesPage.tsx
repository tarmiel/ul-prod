/* eslint-disable max-len */
import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articles';
import { ArticleView } from 'entities/Article/model/types/article';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const articlesView = useSelector(getArticlesPageView);
  const articlesisLoading = useSelector(getArticlesPageIsLoading);
  const articlesError = useSelector(getArticlesPageError);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={cn(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={articlesView} onViewClick={onChangeView} />
        <ArticleList articles={articles} view={articlesView} isLoading={articlesisLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
