import { applyCategories } from '../applyCategories';
import type { Category, Product } from '../../types';

describe('test apply categories function', () => {
    const productsBase: Product[] = [
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

    test.each<{
        inputProducts: Product[];
        inputCategories: Category[];
        expected: Product[];
    }>([
        {
            inputProducts: [...productsBase],
            inputCategories: [],
            expected: [...productsBase],
        },
        {
            inputProducts: [...productsBase],
            inputCategories: ['Для дома', 'Электроника'],
            expected: [productsBase[0], productsBase[1], productsBase[3]],
        },
    ])(
        'should return products that depends on input categories',
        ({ inputProducts, inputCategories, expected }) => {
            expect(
                applyCategories(inputProducts, inputCategories)
            ).toStrictEqual(expected);
        }
    );
});
