import React, { FC, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfilePageHeader.module.scss';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from 'entities/Profile';

interface IProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

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
    <div className={cn(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      <div className={styles.controlBtns}>
        {readonly ? (
          <Button className={styles.editBtn} theme="outline" onClick={onEdit}>
            {t('Редактировать')}
          </Button>
        ) : (
          <>
            <Button className={styles.cancelBtn} theme="outline_red" onClick={onCancelEdit}>
              {t('Отменить')}
            </Button>
            <Button className={styles.saveBtn} theme="outline" onClick={onSave}>
              {t('Сохранить')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePageHeader;
