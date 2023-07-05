import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface ICommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<ICommentListProps> = ({ comments, isLoading, className }) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={cn(styles.CommentList, {}, [className])}>
        <CommentCard isLoading className={styles.comment} />
        <CommentCard isLoading className={styles.comment} />
        <CommentCard isLoading className={styles.comment} />
      </div>
    );
  }

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
