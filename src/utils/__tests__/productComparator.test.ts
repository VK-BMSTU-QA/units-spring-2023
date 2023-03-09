import { productComparator } from '../productComparator';
import type { Product, SortBy } from '../../types';

describe('test productComparator function', () => {
    const lProduct: Product = {
        id: 21,
        name: 'Smartphone',
        category: 'Электроника',
        description: 'Description',
        price: 256,
    };
    const rProduct: Product = {
        id: 21,
        name: 'Headphones',
        category: 'Электроника',
        description: 'Description',
        price: 128,
    };
    const eqProduct: Product = {
        id: 21,
        name: 'gloves',
        category: 'Одежда',
        description: 'Description',
        price: 256,
    };

    const lessVal: SortBy = 'по убыванию цены';
    const moreVal: SortBy = 'по возрастанию цены';
    const defaultVal: SortBy = 'по умолчанию';

    const zeroRes = 0;
    const plusRes = 1;
    const minusRes = -1;

    it('should return default value', () => {
        expect(productComparator(defaultVal)(lProduct, rProduct)).toBe(zeroRes);
    });

    it('should return true value in case right > left', () => {
        expect(productComparator(lessVal)(rProduct, lProduct)).toBe(plusRes);
    });

    it('should return false value in case right > left', () => {
        expect(productComparator(moreVal)(rProduct, lProduct)).toBe(minusRes);
    });

    it('should return false value in case right < left', () => {
        expect(productComparator(lessVal)(lProduct, rProduct)).toBe(minusRes);
    });

    it('should return true value in case right < left', () => {
        expect(productComparator(moreVal)(lProduct, rProduct)).toBe(plusRes);
    });

    it('should return zero value if prices are equal', () => {
        expect(productComparator(lessVal)(lProduct, eqProduct)).toBe(zeroRes);
    });
});
