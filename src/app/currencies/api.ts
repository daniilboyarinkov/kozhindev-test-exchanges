import { delay } from './../../utils/delay';
import { convertApiDataToViewFormat } from '../../utils/converters/currency/apiDataToViewFormat';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { currenciesActions } from './slice';
import { ICurrency, IResponse } from './types';

import { API_DOMAIN, API_METHODS } from '../../constants';

export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_DOMAIN }),
    endpoints: (build) => ({
        getCurrencies: build.query<ICurrency[], string>({
            query: () => API_METHODS.GET_CURRENCY,
            async onQueryStarted(_, { dispatch }) {
                dispatch(currenciesActions.setLastUpdate());
            },
            transformResponse: async (response: IResponse) => {
                // TODO:
                // ALERT!
                // принудительная задержка обработки данных
                await delay(1000);
                return convertApiDataToViewFormat(response);
            },
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
