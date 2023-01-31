import { ROUNDING } from '../constants';

export const round = (num: number, to: number = ROUNDING) => num.toFixed(to);
