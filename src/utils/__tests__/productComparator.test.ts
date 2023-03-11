import { Product, SortBy } from '../../types';
import { getProductRUBPrice, productComparator } from '../productComparator';

describe('test converter function', () => {
    it('should return rub from rub price', () => {
        const product: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 100,
            category: "Электроника"
        };
        const result: number = 100;
        expect(getProductRUBPrice(product)).toStrictEqual(result);
    });
    it('should return rub from dollar price', () => {
        const product: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        const result: number = 7000;
        expect(getProductRUBPrice(product)).toStrictEqual(result);
    });
    it('should return rub without price symbol', () => {
        const product: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            price: 100,
            category: "Электроника"
        };
        const result: number = 100;
        expect(getProductRUBPrice(product)).toStrictEqual(result);
    });
});

describe('test product comparator with sortby = by default', () => {
    const sortBy: SortBy = 'по умолчанию';
    test('with both rubles', () => {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 100,
            category: "Электроника"
        };
        expect(productComparator(sortBy)(product1, product2)).toBe(0);
    });
    test('with both dollars', () => {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        expect(productComparator(sortBy)(product1, product2)).toBe(0);
    });
    test('with different currences', () => {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        expect(productComparator(sortBy)(product1, product2)).toBe(0);
    });
});

describe('test product comparator with sortby = by higher price', () => {
    const sortBy: SortBy = 'по возрастанию цены';
    {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 100,
            category: "Электроника"
        };
        test.each([[product1, product2, -1],[product2, product1, 1],[product1, product1, 0],])('with both rubles', (product1, product2, result) => {
            expect(productComparator(sortBy)(product1, product2)).toBe(result);
        });
    }

    {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        test.each([[product1, product2, -1],[product2, product1, 1],[product1, product1, 0],])('with both dollars', (product1, product2, result) => {
            expect(productComparator(sortBy)(product1, product2)).toBe(result);
        });
    }

    {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        const product3: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 7000,
            category: "Электроника"
        };
        test.each([[product1, product2, -1],[product2, product1, 1],[product3, product2, 0],])('with different currences', (product1, product2, result) => {
            expect(productComparator(sortBy)(product1, product2)).toBe(result);
        });
    }
});

describe('test product comparator with sortby = by lower price', () => {
    const sortBy: SortBy = 'по убыванию цены';
    {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 100,
            category: "Электроника"
        };
        test.each([[product1, product2, 1],[product2, product1, -1],[product1, product1, 0],])('with both rubles', (product1, product2, result) => {
            expect(productComparator(sortBy)(product1, product2)).toBe(result);
        });
    }

    {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        test.each([[product1, product2,1], [product2, product1,-1], [product1, product1,0]])('with both dollars', (product1, product2, result) => {
            expect(productComparator(sortBy)(product1, product2)).toBe(result);
        });
    }
    {
        const product1: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 30,
            category: "Электроника"
        };
        const product2: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '$',
            price: 100,
            category: "Электроника"
        };
        const product3: Product = {
            id: 0,
            name: "electrProd",
            description: "",
            priceSymbol: '₽',
            price: 7000,
            category: "Электроника"
        };
        test.each([[product1, product2, 1], [product2, product1, -1], [product3, product2, 0]])('with different currences', (product1, product2, result) => {
            expect(productComparator(sortBy)(product1, product2)).toBe(result);
        });
    }
});
