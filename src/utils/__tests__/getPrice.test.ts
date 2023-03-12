import { getPrice } from '../getPrice';

describe('test getPrice function', () => {
    it('should return value with price symbol', () => {
        expect(getPrice(100, '₽')).toBe('100 ₽');
    });

    it('should return value with price symbol', () => {
        expect(getPrice(325, '$')).toBe('325 $');
    });
});
