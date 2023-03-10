import { PriceSymbol } from '../../types';
import { getPrice } from '../getPrice';

describe('Проверка getPrice', () => {
    test.each<{ val: number, sym?: PriceSymbol, expected: string }>([
        { val: 1, sym: '₽', expected: '1 ₽' },
        { val: 1, expected: '1 ₽' },
        { val: 1, sym: '$', expected: '1 $' },
        { val: 1, sym: '₽', expected: '1 ₽' },
        { val: 1234, sym: '$', expected: '1,234 $' },
        { val: 1234567,  expected: '1,234,567 ₽' },
    ])('Проверяем: $val + $sym = $expected', ({ val, sym, expected }) => {
        expect(getPrice(val, sym)).toEqual(expected);
    });
});
