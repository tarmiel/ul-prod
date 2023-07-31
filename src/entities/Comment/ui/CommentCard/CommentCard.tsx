import { FC, memo } from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';
import { VStack } from 'shared/ui/Stack';

interface ICommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<ICommentCardProps> = ({ comment, isLoading, className }) => {
  if (isLoading) {
    return (
      <VStack max gap="8" className={cn(styles.CommentCard, {}, [className, styles.loading])}>
        <div className={styles.header}>
          <Skeleton borderRadius={'50%'} width={30} height={30} />
          <Skeleton width={100} height={20} className={styles.username} />
        </div>
        <Skeleton width={'100%'} height={50} />
      </VStack>
    );
  }

  return (
    <VStack max gap="8" className={cn(styles.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={styles.header}>
        {comment?.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.username} title={comment?.user.username} />
      </AppLink>
      <Text>{comment?.text}</Text>
    </VStack>
  );
};

export default memo(CommentCard);
