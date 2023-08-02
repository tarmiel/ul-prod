import { FC } from 'react';

import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import Page from '@/widgets/Page/Page';

const ProfilePage: FC = ({}) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
