export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE';

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT';
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE';
  src: string;
  title: string;
}
