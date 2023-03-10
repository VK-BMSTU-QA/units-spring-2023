import { applyCategories } from '../applyCategories';
import type { Category, Product } from '../../types';
import { Categories } from '../../components';

describe('test apply categories function', () => {
    const scrubber: Product = {
        id: 1,
        category: 'Для дома',
        name: 'Ёршик',
        description: 'Супер ёршик',
        price: 15,
        priceSymbol: '$',
    };

    const iphone: Product = {
        id: 2,
        category: 'Электроника',
        name: 'IPhone 14',
        description: 'Новый IPhone 14',
        price: 1099,
        priceSymbol: '$',
    };

    const tShirt: Product = {
        id: 3,
        category: 'Одежда',
        name: 'T-shirt',
        description: 'Travis Scott',
        price: 100000,
        priceSymbol: '₽',
    };

    const allTypesProducts: Product[] = [scrubber, iphone, tShirt];
    test.each<{
        products: Product[];
        categories: Category[];
        expected: Product[];
    }>([
        {
            categories: [],
            products: allTypesProducts,
            expected: [scrubber, iphone, tShirt],
        },
        {
            categories: ['Одежда'],
            products: allTypesProducts,
            expected: [tShirt],
        },
        {
            categories: ['Одежда', 'Электроника'],
            products: allTypesProducts,
            expected: [iphone, tShirt],
        },
        {
            categories: ['Одежда', 'Электроника', 'Для дома'],
            products: allTypesProducts,
            expected: [scrubber, iphone, tShirt],
        },
    ])(
        'should work with these products: $products, and with these categories: $categories',
        ({ categories, products, expected }) => {
            expect(applyCategories(products, categories)).toStrictEqual(
                expected
            );
        }
    );
});
