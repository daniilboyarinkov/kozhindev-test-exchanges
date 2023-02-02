import React, { useState } from 'react';

import { useGetCurrenciesQuery } from '../../app/currencies';
import { CODES } from '../../constants';
import { regCurrencyInputPattern } from '../../constants/reg';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import s from '../../style/shared/CurrencyConvertForm.module.scss';
import { CurrencyConverter } from '../../utils/converters/currency/currencyConverter';
import { replaceDotByComma } from '../../utils/replaceDotByComma';
import { validateString } from '../../utils/validateString';
import { CurrencyInput } from '../Inputs/CurrencyInput';

const { EUR, USD } = CODES;

// TODO:
// Refactor needed
// issue: (прямолинейная) реализация двусвязных полей
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

    const handleFirstSelect = (currency: string) => {
        setFirstCurrency(currency);
        handleFirstInput(firstValue);
    };

    const handleSecondSelect = (currency: string) => {
        setSecondCurrency(currency);
        handleSecondInput(firstValue);
    };

    return (
        <div className={s.form}>
            <h1 className={s.title}>Currency Conversion</h1>
            <CurrencyInput
                activeCode={firstCurrency}
                setCurrency={handleFirstSelect}
                value={firstValue}
                handleInput={handleFirstInput}
            />
            <CurrencyInput
                activeCode={secondCurrency}
                setCurrency={handleSecondSelect}
                value={secondValue}
                handleInput={handleSecondInput}
            />
        </div>
    );
};
