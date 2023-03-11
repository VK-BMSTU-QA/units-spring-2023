import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it('should return value with ruble symbol provided', () => {
        expect(getPrice(100, '₽')).toBe('100 ₽');
    });
    it('should return value without symbol provided', () => {
        expect(getPrice(325)).toBe('325 ₽');
    });
    it('should return value with dollar symbol provided', () => {
        expect(getPrice(325, '$')).toBe('325 $');
    });
});
