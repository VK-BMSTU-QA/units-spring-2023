import { productComparator } from '../productComparator';
import type { Product, SortBy, Category } from '../../types';

const productsMock: Product[] = [
    {
        id: 1,
        name: 'IPhone 14 Pro',
        description: 'Latest iphone, buy it now',
        price: 500,
        priceSymbol: '$',
        category: 'Электроника',
        imgUrl: '/iphone.png',
    },
    {
        id: 2,
        name: 'Костюм гуся',
        description: 'Запускаем гуся, работяги',
        price: 1000,
        priceSymbol: '₽',
        category: 'Одежда',
    }
];

const productsMockAscPrice: Product[] = [
    {
        id: 2,
        name: 'Костюм гуся',
        description: 'Запускаем гуся, работяги',
        price: 1000,
        priceSymbol: '₽',
        category: 'Одежда',
    },
    {
        id: 1,
        name: 'IPhone 14 Pro',
        description: 'Latest iphone, buy it now',
        price: 500,
        priceSymbol: '$',
        category: 'Электроника',
        imgUrl: '/iphone.png',
    }
];

describe('test productComparator function', () => {
    test('asc price', () => {
        const resultProducts = productsMock
        const teststr: SortBy = 'по умолчанию'
        expect(productsMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

    test('asc price', () => {
        const resultProducts = productsMockAscPrice
        const teststr: SortBy = 'по возрастанию цены'
        expect(productsMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

    test('desc price', () => {
        const resultProducts = productsMock
        const teststr: SortBy = 'по убыванию цены'
        expect(productsMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

    test('case equal prices', () => {
        const productTestMock = productsMock.map((elem) => {elem.price = 1000; return elem;})
        const resultProducts = productTestMock

        const teststr: SortBy = 'по убыванию цены'
        expect(productTestMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

});
