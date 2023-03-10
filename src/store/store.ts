import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { feedApi } from '../modules/feed/api/repository';
import { profileApi } from '../modules/profile/api/repository';
import { authApi } from '../modules/auth/api/repository';

export const store = configureStore({
  reducer: {
    [feedApi.reducerPath]: feedApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      feedApi.middleware,
      profileApi.middleware,
      authApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
