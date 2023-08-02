import React, { FC, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { ArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent: FC<IArticleImageBlockComponentProps> = ({ block, className }) => {
  return (
    <div className={cn(styles.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={styles.img} />
      {block.title && <Text align="center">{block.title}</Text>}
    </div>
  );
};

export default memo(ArticleImageBlockComponent);
