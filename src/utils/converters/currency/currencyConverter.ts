import { ICurrency } from './../../../app/currencies/types';
import { convertBetweenUnary } from './betweenUnary';

import { replaceCommaByDot, replaceDotByComma } from '../../replaceDotByComma';
import { round } from '../../round';

export const CurrencyConverter = (
    currencies: ICurrency[],
    value: string,
    from: string,
    to: string,
    convertTarget: (value: ((prevState: string) => string) | string) => void,
): void => {
    if (!value) return convertTarget('');

    const fromValue = _findDefaultCurrencyValue(currencies, from);
    const toValue = _findDefaultCurrencyValue(currencies, to);

    const convertedValue =
        convertBetweenUnary(fromValue, toValue) *
        Number(replaceCommaByDot(value));

    const result = replaceDotByComma(round(convertedValue));

    convertTarget(result);
};

const _findDefaultCurrencyValue = (
    currencies: ICurrency[],
    charCode: string,
    defaultCurrency: keyof ICurrency = 'RubValue',
): number => {
    const currency = currencies.find((cur) => cur.CharCode === charCode);

    return currency ? Number(currency[defaultCurrency]) : 0;
};
