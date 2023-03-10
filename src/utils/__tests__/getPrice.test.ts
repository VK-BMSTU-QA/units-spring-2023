import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it('should return value with price symbol', () => {
        expect(getPrice(100, '₽')).toEqual('100 ₽');
    });
    it('big number', () => {
        expect(getPrice(1000000, '₽')).toEqual('1,000,000 ₽');
    });
});
