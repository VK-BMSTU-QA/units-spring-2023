import { Product } from '../../types';
import { productComparator } from '../productComparator';

describe('test productComparator function', () => {
    let product: Product[];
    beforeAll(() => {
        product = [
            {
                id: 1,
                name: 'string',
                description: 'string',
                price: 1_000,
                priceSymbol: '$',
                category: 'Электроника',
            },
            {
                id: 2,
                name: 'string',
                description: 'string',
                price: 200,
                priceSymbol: '$',
                category: 'Электроника',
            },
            {
                id: 3,
                name: 'string',
                description: 'string',
                price: 3_000,
                priceSymbol: '$',
                category: 'Электроника',
            },
        ];
    });

    it('return 0 if sortBy по умолчанию', () => {
        expect(productComparator('по умолчанию')(product[0], product[1])).toBe(0);
    });

    it('return 0 if first price equal second price', () => {
        expect(productComparator('по убыванию цены')(product[0], product[0])).toBe(0);
    });

    it('return 1 if sortBy по возрастанию цены and 1 product > 2 product ', () => {
        expect(productComparator('по возрастанию цены')(product[0], product[1])).toBe(1);
    });

    it('return 1 if sortBy по убыванию цены and 2 product > 1 product ', () => {
        expect(productComparator('по убыванию цены')(product[1], product[0])).toBe(1);
    });

    it('return -1 if sortBy по убыванию цены and 1 product > 2 product ', () => {
        expect(productComparator('по убыванию цены')(product[0],product[1])).toBe(-1);
    });

    it('return -1 if sortBy по возрастанию цены цены and 2 product > 1 product ', () => {
        expect(productComparator('по возрастанию цены')(product[1],product[0])).toBe(-1);
    });
});
