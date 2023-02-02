import { IResCurrency, IResCurrencyFiltered } from '../../app/currencies';

export const filterResCurrencyObject = (
    obj: IResCurrency,
): IResCurrencyFiltered => {
    const result: IResCurrencyFiltered = {
        Name: obj.Name,
        CharCode: obj.CharCode,
    };

    return result;
};
