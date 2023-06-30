/* eslint-disable indent */
/* eslint-disable react/display-name */

import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';

import { loginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>): Decorator =>
  (StoryComponent) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...asyncReducers, ...defaultReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
