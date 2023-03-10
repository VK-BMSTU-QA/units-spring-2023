import { PriceSymbol } from '../../types';
import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it.each<[number, PriceSymbol, string]>([
        [100, '₽', '100 ₽'],
        [325, '$', '325 $'],
        [1234, '$', '1,234 $'],
    ])(
        'should return value with price and currency',
        (cost, currency, expected) => {
            expect(getPrice(cost, currency as PriceSymbol)).toBe(expected);
        }
    );
});
