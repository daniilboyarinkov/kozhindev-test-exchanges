import { ICurrency, IResCurrency, IResponse } from '../../../app/currencies';
import { CODES } from '../../../constants';
import { round } from '../../round';
import { filterResCurrencyObject } from './../../filters/filterCurrencyObject';
import { convertBetweenUnary } from './betweenUnary';

export const convertApiDataToViewFormat = (
    data: Record<string, IResCurrency>,
): ICurrency[] => {
    const { EUR, USD, CNY } = CODES;
    const rawCurrenciesValues = [EUR, USD, CNY].map(
        (currency) => data[currency].Value,
    );

    // добавление недостающих вычисляемых полей в пришедший с api объект
    const resultData: ICurrency[] = Object.keys(data).map((key) => {
        const curValue = data[key].Value;

        const [EurValue, UsdValue, CnyValue] = rawCurrenciesValues.map((val) =>
            round(convertBetweenUnary(curValue, val)),
        );
        const RubValue = round(curValue);

        return {
            ...filterResCurrencyObject(data[key]),
            EurValue,
            UsdValue,
            CnyValue,
            RubValue,
        };
    });

    return resultData;
};
