import { productComparator } from '../productComparator';

import type { Product } from '../../types';

const table: Array<[Product, Product, number]> = [
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
        0,
    ],
    [
        {
            id: 1,
            name: 'asd',
            description: 'lalal',
            price: 13,
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
        -1,
    ],
    [
        {
            id: 1,
            name: 'asd',
            description: 'lalal',
            price: 14,
            priceSymbol: '$',
            imgUrl: 'asdaasd',
            category: 'Электроника',
        },
        {
            id: 2,
            name: 'asdasd',
            description: 'lalal',
            price: 13,
            priceSymbol: '₽',
            imgUrl: 'asdaasd',
            category: 'Одежда',
        },
        1,
    ],
]


test.each(table)('compare by ask $', (product1, product2, expected) => {
    expect(productComparator('по возрастанию цены')(product1, product2)).toBe(expected);
});

test.each(table)('compare by desc $', (product1, product2, expected) => {
    expect(productComparator('по убыванию цены')(product1, product2)).toEqual(expected === 0 ? 0 : -expected);
});

test.each(table)('compare by default $', (product1, product2, expected) => {
    expect(productComparator('по умолчанию')(product1, product2)).toBe(0);
});