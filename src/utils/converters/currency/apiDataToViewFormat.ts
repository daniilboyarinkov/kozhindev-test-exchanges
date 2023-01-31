import { convertBetweenUnary } from './convertBetweenUnary';

import { ICurrency, IResponse } from '../../../app/currencies';
import { CODES } from '../../../constants';
import { round } from '../../round';

export const convertApiDataToViewFormat = (obj: IResponse): ICurrency[] => {
    const resultData: ICurrency[] = [];
    const targetData = obj.Valute;

    const { EUR, USD, CNY } = CODES;
    const rawCurrenciesValues = [EUR, USD, CNY].map(
        (currency) => targetData[currency].Value,
    );

    // добавление недостающих вычисляемых полей в пришедший с api объект
    Object.keys(targetData).forEach((key) => {
        const curValue = targetData[key].Value;

        const [EurValue, UsdValue, CnyValue] = rawCurrenciesValues.map((val) =>
            round(convertBetweenUnary(curValue, val)),
        );
        const RubValue = round(curValue);

        resultData.push({
            ...targetData[key],
            EurValue,
            UsdValue,
            CnyValue,
            RubValue,
        });
    });

    return resultData;
};
