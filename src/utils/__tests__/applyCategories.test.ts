import { applyCategories } from '../applyCategories';
import type { Category, Product } from '../../types';
import { Categories, ProductCard } from '../../components';

// describe('test get products with categories', () => {
//     it('should return products with categories in argument', () => {
//         expect(applyCategories('по умолчанию')).toBe('по возрастанию цены');
//         // expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
//         // expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
//     });
// });

const table: Array<[Product[], Category[], Product[]]> = [
    [
        [
            {
                id: 1,
                name: 'asd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Электроника',
            },
            {
                id: 2,
                name: 'asdasd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Одежда',
            },

        ],
        [
            'Одежда',
        ],
        [
            {
                id: 2,
                name: 'asdasd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Одежда',
            },
        ]
    ],
    [
        [
            {
                id: 1,
                name: 'asd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Электроника',
            },
            {
                id: 2,
                name: 'asdasd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Одежда',
            },

        ],
        [],
        [
            {
                id: 1,
                name: 'asd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Электроника',
            },
            {
                id: 2,
                name: 'asdasd',
                description: 'lalal',
                price: 14,
                priceSymbol: '₽',
                imgUrl: 'asdaasd',
                category: 'Одежда',
            },
        ]
    ],

];

test.each(table)('all products with categories $', (products, categories, expected) => {
    expect(applyCategories(products, categories)).toStrictEqual(expected);
});
