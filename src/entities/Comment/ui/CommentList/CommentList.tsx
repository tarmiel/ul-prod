import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';

interface ICommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<ICommentListProps> = ({ comments, isLoading, className }) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={className}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <VStack max gap="8" className={className}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
      ) : (
        <Text>{t('Комментарии отсутствуют')}</Text>
      )}
    </VStack>
  );
};

export default CommentList;
