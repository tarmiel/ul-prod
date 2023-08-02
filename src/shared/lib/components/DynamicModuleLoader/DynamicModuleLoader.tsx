import { FC, ReactNode, useEffect } from 'react';

import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children?: ReactNode;
}

const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({ reducers, removeAfterUnmount, children }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@REMOVE ${name}` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};

export default DynamicModuleLoader;
