import { Product } from '../../types';
import { productComparator } from '../productComparator';

describe('testing productComporator function', () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'name 1',
            description: 'description 1',
            price: 100,
            category: 'Одежда',
        },
        {
            id: 2,
            name: 'name 2',
            description: 'description 2',
            price: 1000,
            category: 'Для дома',
        },
    ];

    it('default & left price > right price', () => {
        expect(
            productComparator('по умолчанию')(products[1], products[0])
        ).toBe(0);
    });

    it('default & left price < right price', () => {
        expect(
            productComparator('по умолчанию')(products[0], products[1])
        ).toBe(0);
    });

    it('ascending sort & left price > right price', () => {
        expect(
            productComparator('по возрастанию цены')(products[1], products[0])
        ).toBe(1);
    });

    it('ascending sort & left price < right price', () => {
        expect(
            productComparator('по возрастанию цены')(products[0], products[1])
        ).toBe(-1);
    });

    it('descending sort & left price > right price', () => {
        expect(
            productComparator('по убыванию цены')(products[1], products[0])
        ).toBe(-1);
    });

    it('descending sort & left price < right price', () => {
        expect(
            productComparator('по убыванию цены')(products[0], products[1])
        ).toBe(1);
    });

    it('descending sort & left price === right price', () => {
        expect(
            productComparator('по убыванию цены')(products[0], products[0])
        ).toBe(0);
    });

    it('ascending sort & left price === right price', () => {
        expect(
            productComparator('по возрастанию цены')(products[0], products[0])
        ).toBe(0);
    });
});
