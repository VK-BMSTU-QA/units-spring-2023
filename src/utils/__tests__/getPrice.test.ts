import { PriceSymbol } from '../../types';
import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it.each([
        [100, '₽', '100 ₽'],
        [325, '$', '325 $'],
    ])(
        'should return value with price and currency',
        (cost, currency, expexted) => {
            expect(getPrice(cost, currency as PriceSymbol)).toBe(expexted);
        }
    );
});
