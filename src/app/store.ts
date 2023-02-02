import { configureStore } from '@reduxjs/toolkit';

import { currenciesMeta } from './currencies';
import { currenciesApi } from './currencies/api';
import { themeSlice } from './theme/slice';

export const store = configureStore({
    reducer: {
        currencies: currenciesMeta.reducer,
        theme: themeSlice.reducer,
        [currenciesApi.reducerPath]: currenciesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currenciesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
