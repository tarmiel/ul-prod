import React, { FC, memo } from 'react';
import styles from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
styles;
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

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
