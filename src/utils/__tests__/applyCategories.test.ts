import { applyCategories } from '../applyCategories';
import type { Category, Product } from '../../types';

describe('test apply categories function', () => {
    const inputProducts: Product[] = [
        {
            id: 12,
            name: 'Phone',
            category: 'Электроника',
            description: 'Description',
            price: 100,
        },
        {
            id: 256,
            name: 'table',
            category: 'Для дома',
            description: 'Description',
            price: 50,
        },
        {
            id: 1024,
            name: 'shoes',
            category: 'Одежда',
            description: 'Description',
            price: 1000,
        },
        {
            id: 123,
            name: 'Desktop',
            category: 'Электроника',
            description: 'Description',
            price: 456,
        },
    ];

    it('should return products that recieved on input', () => {
        const inputCategories: Category[] = [];
        expect(applyCategories(inputProducts, inputCategories)).toStrictEqual(
            inputProducts
        );
    });

    it('should return products with depended on input categories', () => {
        const inputCategories: Category[] = ['Для дома', 'Электроника'];
        const expectedRes: Product[] = [
            {
                id: 12,
                name: 'Phone',
                category: 'Электроника',
                description: 'Description',
                price: 100,
            },
            {
                id: 256,
                name: 'table',
                category: 'Для дома',
                description: 'Description',
                price: 50,
            },
            {
                id: 123,
                name: 'Desktop',
                category: 'Электроника',
                description: 'Description',
                price: 456,
            },
        ];

        expect(applyCategories(inputProducts, inputCategories)).toStrictEqual(
            expectedRes
        );
    });
});
