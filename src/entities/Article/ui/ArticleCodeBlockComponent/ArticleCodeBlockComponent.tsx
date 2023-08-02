import React, { FC, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import Code from '@/shared/ui/Code/Code';

import { ArticleCodeBlock } from '../../model/types/article';

import styles from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = ({ block, className }) => {
  return (
    <div className={cn(styles.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};

export default memo(ArticleCodeBlockComponent);
