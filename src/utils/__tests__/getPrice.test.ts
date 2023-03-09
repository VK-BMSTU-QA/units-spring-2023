import { getPrice } from '../getPrice';
import { PriceSymbol } from '../../types';

describe('test get price function', () => {
    test.each<{ value: number; symbol: PriceSymbol; expected: string }>([
        { value: 100, symbol: '$', expected: '100 $' },
        { value: 150, symbol: '₽', expected: '150 ₽' },
    ])(
        'should return correct price: $value, with symbol: $symbol',
        ({ value, symbol, expected }) => {
            expect(getPrice(value, symbol)).toBe(expected);
        }
    );
});
