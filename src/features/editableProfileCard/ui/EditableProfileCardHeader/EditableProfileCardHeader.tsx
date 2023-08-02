import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={className}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme="outline" onClick={onEdit} data-testid="EditableProfileCardHeader.EditButton">
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme="outline_red" onClick={onCancelEdit} data-testid="EditableProfileCardHeader.CancelButton">
                {t('Отменить')}
              </Button>
              <Button theme="outline" onClick={onSave} data-testid="EditableProfileCardHeader.SaveButton">
                {t('Сохранить')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};

export default memo(EditableProfileCardHeader);
