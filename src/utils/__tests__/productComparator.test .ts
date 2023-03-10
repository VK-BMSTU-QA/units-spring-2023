import { productComparator } from '../productComparator';
import type { SortBy, Product, Category } from '../../types';

const productsMock: Product[] = [
    {
        id: 1,
        name: 'Наушники',
        description: 'Беспроводные наушники',
        price: 10000,
        category: 'Электроника',
    },
    {
        id: 2,
        name: 'Диван',
        description: 'Красный кожаный диван',
        price: 200000,
        category: 'Для дома',
    },
]

describe('Тест функции productComparator', () => {
    it('Сортировка по умолчанию', () => {
        const sortedBy: SortBy = 'по умолчанию';

        expect(productComparator(sortedBy)(productsMock[0], productsMock[1])).toEqual(0);
    });

    it.each([
        [productsMock, 'по возрастанию цены' as SortBy, -1],
        [[
            {
                ...productsMock[1],
                price: 10000,
                priceSymbol: '$',
            },
            {
                ...productsMock[0]
            },
        ] as Product[],'по возрастанию цены' as SortBy, 1],
    ])('Сортировка по возрастанию цены', (products, sortedBy, expected) => {
        expect(productComparator(sortedBy)(products[0], products[1])).toEqual(expected);
    });

    it.each([
        [productsMock, 'по убыванию цены' as SortBy, 1],
        [[
            {
                ...productsMock[1],
                price: 10000,
                priceSymbol: '$',
            },
            {
                ...productsMock[0]
            },
        ] as Product[],'по убыванию цены' as SortBy, -1],
    ])('Сортировка по убыванию цены', (products, sortedBy, expected) => {
        expect(productComparator(sortedBy)(products[0], products[1])).toEqual(expected);
    });

    it('Сортировка при одинаковой цене', () => {
        const products: Product[] = [
            {
                ...productsMock[1],
                price: 10000,
            },
            {
                id: 1,
                name: 'Наушники',
                description: 'Беспроводные наушники',
                price: 10000,
                category: 'Электроника'  as Category,
            },
        ];

        expect(productComparator('по убыванию цены' as SortBy)(products[0], products[1])).toEqual(0);
    });
});
