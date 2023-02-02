import React from 'react';

import { useGetCurrenciesQuery } from '../app/currencies';
import { useAppSelector } from '../app/hooks';
import s from '../style/shared/LastUpdateBlock.module.scss';
import { dateConverter } from '../utils/converters/dateConverter';
import { timeConverter } from '../utils/converters/timeConverter';

export const LastUpdateBlock = () => {
    const { refetch } = useGetCurrenciesQuery('');
    const lastUpdate = useAppSelector((state) => state.currencies.lastUpdate);

    return (
        <div className={s['last-update-block']}>
            <div className={s['date-text']}>
                {dateConverter(new Date(lastUpdate))}
            </div>
            <div className={s['time-text']}>
                {timeConverter(new Date(lastUpdate))}
            </div>
            <button onClick={refetch} className="btn">
                Update
            </button>
        </div>
    );
};
