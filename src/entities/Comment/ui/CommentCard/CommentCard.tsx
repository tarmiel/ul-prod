import React, { FC } from 'react';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { cn } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

interface ICommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<ICommentCardProps> = ({ comment, isLoading, className }) => {
  if (isLoading) {
    return (
      <div className={cn(styles.CommentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton borderRadius={'50%'} width={30} height={30} />
          <Skeleton width={100} height={20} className={styles.username} />
        </div>
        <Skeleton width={'100%'} height={50} className={styles.text} />
      </div>
    );
  }

  return (
    <div className={cn(styles.CommentCard, {}, [className])}>
      <div className={styles.header}>
        {comment?.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.username} title={comment?.user.username} />
      </div>
      <Text className={styles.text}>{comment?.text}</Text>
    </div>
  );
};

export default CommentCard;
