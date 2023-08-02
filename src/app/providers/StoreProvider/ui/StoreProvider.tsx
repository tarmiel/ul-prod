import React, { FC, ReactNode } from 'react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: ReactNode;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
