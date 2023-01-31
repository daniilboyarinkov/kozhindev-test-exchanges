import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const initialState: IInitialState = {
    lastUpdate: Date.now(),
};

export const currenciesMeta = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        setLastUpdate: (state) => {
            state.lastUpdate = Date.now();
        },
    },
});

export const currenciesActions = currenciesMeta.actions;
