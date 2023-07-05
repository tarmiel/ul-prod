import React, { FC } from 'react';
import styles from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import CommentCard from '../CommentCard/CommentCard';

interface ICommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<ICommentListProps> = ({ comments, isLoading, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} className={styles.comment} isLoading={isLoading} />
        ))
      ) : (
        <Text>{t('Комментарии отсутствуют')}</Text>
      )}
    </div>
  );
};

export default CommentList;
