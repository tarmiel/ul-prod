import { profileReducer } from 'entities/Profile';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = ({}) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>{t('Profile Page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
