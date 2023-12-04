'use client';

import store from '@/store/configureStore';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type ReduxProviderProps = {
  children: ReactNode;
};

export const Reduxprovider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};