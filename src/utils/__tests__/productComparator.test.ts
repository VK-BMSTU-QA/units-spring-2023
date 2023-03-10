import { Product } from '../../types';
import { productComparator } from '../productComparator';

describe('test product comparator function', () => {
    const lProduct: Product = {
        id: 1,
        name: 'name',
        description: 'desc',
        price: 1,
        priceSymbol: '$',
        imgUrl: 'test',
        category: 'Для дома',
    };

    const rProduct: Product = {
        id: 1,
        name: 'name',
        description: 'desc',
        price: 2,
        priceSymbol: '$',
        imgUrl: 'test',
        category: 'Для дома',
    };

    it('should return -1 for product with higher price with sort ascending', () => {
        expect(
            productComparator('по возрастанию цены')(
                { ...lProduct },
                { ...rProduct }
            )
        ).toBe(-1);
    });

    it('should return 1 for product with lower price with sort descending', () => {
        expect(
            productComparator('по убыванию цены')(
                { ...lProduct },
                { ...rProduct }
            )
        ).toBe(1);
    });

    it('should return -1 for product with lower price with different currencies and sort descending', () => {
        expect(
            productComparator('по убыванию цены')(
                { ...lProduct, price: 100, priceSymbol: '₽' },
                { ...rProduct, price: 1, priceSymbol: '$' }
            )
        ).toBe(-1);
    });

    it('should return 1 for product with lower price and sort ascending', () => {
        expect(
            productComparator('по возрастанию цены')(
                { ...lProduct, price: 100, priceSymbol: '₽' },
                { ...rProduct, price: 50, priceSymbol: '₽' }
            )
        ).toBe(1);
    });

    it('should return 0 in case of prices equality', () => {
        expect(productComparator('по убыванию цены')(lProduct, lProduct)).toBe(
            0
        );
    });

    it('should return 0 in case of default sort', () => {
        expect(productComparator('по умолчанию')(lProduct, rProduct)).toBe(0);
    });
});
