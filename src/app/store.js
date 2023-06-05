import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.reducer';
import dashboardReducer from '../features/dashboard/dashboard.reducer';
import sharedReducer from '../features/shared/shared.reducer';
import productReducer from '../features/product/product.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    shared: sharedReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
