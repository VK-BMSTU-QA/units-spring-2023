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

        expect(productsMock.sort(productComparator(sortedBy))).toEqual(productsMock);
    });

    it.each([
        [productsMock, 'по возрастанию цены' as SortBy, productsMock],
        [[
            {
                ...productsMock[1],
                price: 10000,
                priceSymbol: '$',
            },
            {
                ...productsMock[0]
            },
        ] as Product[],'по возрастанию цены' as SortBy, [
            {
                ...productsMock[0]
            },
            {
                ...productsMock[1],
                price: 10000,
                priceSymbol: '$',
            },
        ] as Product[]],
    ])('Сортировка по возрастанию цены', (products, sortedBy, expected) => {
        expect(products.sort(productComparator(sortedBy))).toEqual(expected);
    });

    it.each([
        [productsMock, 'по убыванию цены' as SortBy, [
            {
                ...productsMock[1]
            },
            {
                ...productsMock[0]
            },
        ] as Product[]],
        [[
            {
                ...productsMock[1],
                price: 10000,
                priceSymbol: '$',
            },
            {
                ...productsMock[0]
            },
        ] as Product[],'по убыванию цены' as SortBy, [
            {
                ...productsMock[1],
                price: 10000,
                priceSymbol: '$',
            },
            {
                ...productsMock[0]
            },
        ] as Product[]],
    ])('Сортировка по убыванию цены', (products, sortedBy, expected) => {
        expect(products.sort(productComparator(sortedBy))).toEqual(expected);
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
        const expected: Product[] = [
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

        expect(products.sort(productComparator('по убыванию цены' as SortBy))).toEqual(expected);
    });
});
