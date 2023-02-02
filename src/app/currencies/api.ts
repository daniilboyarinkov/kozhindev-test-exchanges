import { createApi } from '@reduxjs/toolkit/query/react';

import { delay } from './../../utils/delay';
import { currenciesActions } from './slice';
import { ICurrency, IResponse } from './types';

import { axiosBaseQuery } from '../../api/axios';
import { API_DOMAIN, API_METHODS } from '../../constants';
import { convertApiDataToViewFormat } from '../../utils/converters/currency/apiDataToViewFormat';

export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: axiosBaseQuery({ baseUrl: API_DOMAIN }),
    endpoints: (build) => ({
        getCurrencies: build.query<ICurrency[], string>({
            query: () => ({ url: API_METHODS.GET_CURRENCY, method: 'GET' }),
            async onQueryStarted(_, { dispatch }) {
                dispatch(currenciesActions.setLastUpdate());
            },
            transformResponse: async (response: IResponse) => {
                // TODO:
                // ALERT!
                // принудительная задержка обработки данных
                await delay(1000);
                return convertApiDataToViewFormat(response.Valute);
            },
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
