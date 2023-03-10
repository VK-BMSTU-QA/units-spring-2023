import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it('should return value with price symbol (RUB)', () => {
        expect(getPrice(100, '₽')).toBe('100 ₽');
    });

    it('should return value with price symbol (USD)', () => {
        expect(getPrice(325, '$')).toBe('325 $');
    });

    it('should return value with default - RUB price symbol', () => {
        expect(getPrice(325)).toBe('325 ₽');
    });
});
