import { ROUNDING } from '../constants';

export const round = (num: number, fractionDigits: number = ROUNDING) =>
    num.toFixed(fractionDigits);
