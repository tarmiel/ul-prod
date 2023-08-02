import { EntityState } from '@reduxjs/toolkit';

import { ArticleType } from '@/entities/Article';
import { Article, ArticleSortField, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  page: number;
  limit: number;
  hasMore: boolean;

  _inited: boolean;
}
