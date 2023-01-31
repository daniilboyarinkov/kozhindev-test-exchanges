import React, { useState } from 'react';

import { CODES } from '../../constants';
import { CurrencyInput } from '../Inputs/CurrencyInput';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { CurrencyConverter } from '../../utils/converters/currency/currencyConverter';
import { useGetCurrenciesQuery } from '../../app/currencies';
import { replaceDotByComma } from '../../utils/replaceDotByComma';
import { regCurrencyInputPattern } from '../../constants/reg';
import { validateString } from '../../utils/validateString';

import s from '../../style/shared/CurrencyConvertForm.module.scss';

const { EUR, USD } = CODES;

// TODO:
// Refactor needed
// issue: Странная (прямолинейная) реализация двусвязных полей
export const CurrencyConvertForm = () => {
    const { data: currencies } = useGetCurrenciesQuery('');
    const [firstCurrency, setFirstCurrency] = useLocalStorage(
        'firstCurrency',
        USD,
    );
    const [secondCurrency, setSecondCurrency] = useLocalStorage(
        'secondCurrency',
        EUR,
    );
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    const handleFirstInput = (value: string) => {
        if (!validateString(value, regCurrencyInputPattern) && value.length)
            return;

        setFirstValue(replaceDotByComma(value));
        CurrencyConverter(
            currencies ?? [],
            value,
            firstCurrency,
            secondCurrency,
            setSecondValue,
        );
    };

    const handleSecondInput = (value: string) => {
        if (!validateString(value, regCurrencyInputPattern) && value.length)
            return;

        setSecondValue(replaceDotByComma(value));
        CurrencyConverter(
            currencies ?? [],
            value,
            secondCurrency,
            firstCurrency,
            setFirstValue,
        );
    };

    return (
        <div className={s.form}>
            <h1 className={s.title}>Currency Conversion</h1>
            <CurrencyInput
                activeCode={firstCurrency}
                setCurrency={setFirstCurrency}
                value={firstValue}
                handleInput={handleFirstInput}
            />
            <CurrencyInput
                activeCode={secondCurrency}
                setCurrency={setSecondCurrency}
                value={secondValue}
                handleInput={handleSecondInput}
            />
        </div>
    );
};
