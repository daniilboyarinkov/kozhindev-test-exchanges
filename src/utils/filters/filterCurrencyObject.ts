import { ICurrency } from '../../app/currencies';

const unwantedFields = ['ID', 'Previous', 'Nominal', 'Value', 'NumCode'];

export const filterCurrencyObject = (obj: ICurrency) =>
    Object.entries(obj).reduce(
        (acc, [key, value]) =>
            !unwantedFields.includes(key) ? { ...acc, [key]: value } : acc,
        {},
    );
