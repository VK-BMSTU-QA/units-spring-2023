import { applyCategories } from '../applyCategories';
import { Product } from '../../types';
import { Category } from '../../types';

describe('test applyCategories function', () => {
    const productsMock: Product[] = [
        {
            id: 1,
            name: 'test Электроника',
            description: 'описание Электроника',
            price: 111,
            category: 'Электроника',
        },
        {
            id: 1,
            name: 'test Одежда',
            description: 'описание Одежда',
            price: 222,
            category: 'Одежда',
        },
        {
            id: 2,
            name: 'test Для дома',
            description: 'описание Для дома',
            price: 333,
            category: 'Для дома',
        },
    ];

    it('test empty categories selected, should choose all products', () =>
        expect(applyCategories(productsMock, [])).toEqual(productsMock));

    test.each([
        {
            products: productsMock,
            categories: ['Электроника'],
        },
        {
            products: productsMock,
            categories: ['Электроника', 'Одежда'],
        },
        {
            products: productsMock,
            categories: ['Электроника', 'Одежда', 'Для дома'],
        },
    ])('test each sets', ({ products, categories }) =>
        expect(applyCategories(products, categories as Category[])).toEqual(
            products.filter((product) => categories.includes(product.category))
        )
    );
});
