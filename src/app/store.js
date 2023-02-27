import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.reducer';
import dashboardReducer from '../features/dashboard/dashboard.reducer';
import sharedReducer from '../features/shared/shared.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    shared: sharedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
