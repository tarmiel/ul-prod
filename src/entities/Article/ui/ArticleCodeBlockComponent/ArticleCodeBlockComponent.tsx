import React, { FC, memo } from 'react';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';
import { cn } from 'shared/lib/classNames/classNames';
import Code from 'shared/ui/Code/Code';

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
