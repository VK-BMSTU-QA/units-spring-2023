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

describe('test productComparator function', () => {
    test('asc price', () => {
        const resultProducts = [{
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
        }]
        const teststr: SortBy = 'по умолчанию'
        expect(productsMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

    test('asc price', () => {
        const resultProducts = [
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
        }]
        const teststr: SortBy = 'по возрастанию цены'
        expect(productsMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

    test('desc price', () => {
        const resultProducts = [{
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
        }]
        const teststr: SortBy = 'по убыванию цены'
        expect(productsMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

    test('case equal prices', () => {
        const productTestMock: Product[] = [
            {
                id: 1,
                name: 'IPhone 14 Pro',
                description: 'Latest iphone, buy it now',
                price: 1000,
                priceSymbol: '₽',
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

        const resultProducts = [{
            id: 1,
            name: 'IPhone 14 Pro',
            description: 'Latest iphone, buy it now',
            price: 1000,
            priceSymbol: '₽',
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
        }]
        const teststr: SortBy = 'по убыванию цены'
        expect(productTestMock.sort(productComparator(teststr))).toEqual(resultProducts);
    });

});
