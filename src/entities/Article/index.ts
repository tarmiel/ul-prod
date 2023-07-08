export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { default as ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './model/selectors/articleDetails';

export { default as ArticleList } from './ui/ArticleList/ArticleList';
