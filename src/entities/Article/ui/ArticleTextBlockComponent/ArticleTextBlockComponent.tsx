import React, { FC, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { ArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlockComponent: FC<IArticleTextBlockComponentProps> = ({ block, className }) => {
  return (
    <div className={cn(styles.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} className={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </div>
  );
};

export default memo(ArticleTextBlockComponent);
