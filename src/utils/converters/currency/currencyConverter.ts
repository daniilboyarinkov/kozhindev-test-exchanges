import { convertBetweenUnary } from './convertBetweenUnary';
import { ICurrency } from './../../../app/currencies/types';
import { round } from '../../round';
import { replaceDotByComma } from '../../replaceDotByComma';

export const CurrencyConverter = (
    currencies: ICurrency[],
    value: string,
    from: string,
    to: string,
    convertTarget: (value: ((prevState: string) => string) | string) => void,
) => {
    if (!value) {
        convertTarget('');
        return;
    }

    const fromValue = _findRubValue(currencies, from);
    const toValue = _findRubValue(currencies, to);

    convertTarget(
        replaceDotByComma(
            round(
                convertBetweenUnary(fromValue, toValue) *
                    Number(value.replace(',', '.')),
            ),
        ),
    );
};

const _findRubValue = (currencies: ICurrency[], charCode: string): number =>
    Number(currencies.find((cur) => cur.CharCode === charCode)?.RubValue) ?? 0;
