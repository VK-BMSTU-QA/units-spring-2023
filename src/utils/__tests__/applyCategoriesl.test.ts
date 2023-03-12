import { Product } from '../../types';
import { Category } from '../../types';
import { applyCategories } from '../applyCategories';

describe('testing applyCategories function', () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'name 1',
            description: 'description 1',
            price: 1000,
            category: 'Одежда',
        },
        {
            id: 2,
            name: 'name 2',
            description: 'description 2',
            price: 1000,
            category: 'Электроника',
        },
        {
            id: 3,
            name: 'name 3',
            description: 'description 3',
            price: 1000,
            category: 'Для дома',
        },
    ];

    const categories: Category[] = ['Одежда', 'Для дома', 'Электроника'];

    it('return products with null categories', () => {
        expect(applyCategories(products, [])).toEqual(products);
    });

    it('return products with all categories', () => {
        expect(applyCategories(products, categories)).toEqual(products);
    });

    it('return products with particular categories', () => {
        expect(applyCategories(products, ['Одежда'])).toEqual(
            products.filter((p) => p.category === 'Одежда')
        );
    });
});
