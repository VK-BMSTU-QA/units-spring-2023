import type { PriceSymbol } from '../types';

export const getPrice = (value: number, symbol: PriceSymbol = '₽'): string =>
    `${value.toLocaleString()} ${symbol}`;

export default getPrice;
