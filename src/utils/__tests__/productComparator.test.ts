import { Product } from '../../types';
import { productComparator } from '../productComparator';

describe('test productComparator function', () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'some name',
            description: 'some description',
            price: 100,
            category: 'Электроника',
        },
        {
            id: 2,
            name: 'some name',
            description: 'some description',
            price: 1000,
            category: 'Для дома',
        },
    ];

    it('sortBy == по умолчанию и lhs.price < rhs.price', () => {
        expect(
            productComparator('по умолчанию')(products[0], products[1])
        ).toBe(0);
    });
    it('sortBy == по умолчанию и lhs.price > rhs.price', () => {
        expect(
            productComparator('по умолчанию')(products[1], products[0])
        ).toBe(0);
    });
    it('sortBy === по убыванию цены и lhs.price > rhs.price', () => {
        expect(
            productComparator('по убыванию цены')(products[1], products[0])
        ).toBe(-1);
    });
    it('sortBy === по убыванию цены и lhs.price < rhs.price', () => {
        expect(
            productComparator('по убыванию цены')(products[0], products[1])
        ).toBe(1);
    });
    it('sortBy === по возрастанию цены и lhs.price > rhs.price', () => {
        expect(
            productComparator('по возрастанию цены')(products[0], products[1])
        ).toBe(-1);
    });
    it('sortBy === по возрастанию цены и lhs.price < rhs.price', () => {
        expect(
            productComparator('по возрастанию цены')(products[1], products[0])
        ).toBe(1);
    });
    it('lhs.price == rhs.price', () => {
        expect(
            productComparator('по возрастанию цены')(products[1], products[1])
        ).toBe(0);
    });
});
