/* eslint-disable indent */
/* eslint-disable react/display-name */
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>): Decorator =>
  (StoryComponent) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...asyncReducers, ...defaultReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
