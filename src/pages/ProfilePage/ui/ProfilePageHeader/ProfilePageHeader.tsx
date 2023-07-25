import React, { FC, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData, getProfileReadonly, profileActions } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface IProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const user = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" max className={className}>
      <Text title={t('Профиль')} />
      {user?.id === profile?.id && (
        <HStack gap={'8'}>
          {readonly ? (
            <Button theme="outline" onClick={onEdit}>
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button theme="outline_red" onClick={onCancelEdit}>
                {t('Отменить')}
              </Button>
              <Button theme="outline" onClick={onSave}>
                {t('Сохранить')}
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};

export default ProfilePageHeader;
