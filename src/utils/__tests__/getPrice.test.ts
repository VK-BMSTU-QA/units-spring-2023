import { getPrice } from '../getPrice';

describe('test get price function', () => {
    it('should return positive rubles OK', () => {
        expect(getPrice(100, '₽')).toBe('100 ₽');
    });

    it('should return negative rubles OK', () => {
        expect(getPrice(-100, '₽')).toBe('-100 ₽');
    });

    it('should return positive dollars OK', () => {
        expect(getPrice(325, '$')).toBe('325 $');
    });

    it('negative dollars OK', () => {
        expect(getPrice(-325, '$')).toBe('-325 $');
    });

    it('should return value default currency', () => {
        expect(getPrice(325)).toBe('325 ₽');
    });
});
