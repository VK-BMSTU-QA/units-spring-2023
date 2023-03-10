import { PriceSymbol, Product, SortBy } from '../../types';
import { getProductRUBPrice, productComparator } from '../productComparator';

describe('test product comparator function', () => {
    const product1dollar: Product = {
        category: 'Для дома',
        description: 'My first dollar',
        id: 0,
        name: 'Dollar',
        price: 1,
        priceSymbol: '$',
    };
    const product100rubble: Product = {
        category: 'Одежда',
        description: 'Мои первые 100 рублей',
        id: 100,
        name: '100 рублей',
        price: 100,
    };

    it.each<[SortBy, Product, Product]>([
        ['по умолчанию', product1dollar, product100rubble],
        ['по возрастанию цены', product100rubble, product100rubble],
    ])('should returt 0', (comparator, productLeft, productRight) => {
        expect(productComparator(comparator)(productLeft, productRight)).toBe(
            0
        );
    });

    it.each<[SortBy, Product, Product]>([
        ['по убыванию цены', product1dollar, product100rubble],
        ['по возрастанию цены', product100rubble, product1dollar],
    ])('should returt 1', (comparator, productLeft, productRight) => {
        expect(productComparator(comparator)(productLeft, productRight)).toBe(
            1
        );
    });

    it.each<[SortBy, Product, Product]>([
        ['по убыванию цены', product100rubble, product1dollar],
        ['по возрастанию цены', product1dollar, product100rubble],
    ])('should returt -1', (comparator, productLeft, productRight) => {
        expect(productComparator(comparator)(productLeft, productRight)).toBe(
            -1
        );
    });

    it.each<[number, PriceSymbol, number]>([
        [100, '$', 7000],
        [100, '₽', 100],
    ])('', (price, priceSymbol, expected) => {
        const product: Product = {
            category: 'Для дома',
            description: '',
            id: 0,
            name: '',
            price,
            priceSymbol,
        };
        expect(getProductRUBPrice(product)).toBe(expected);
    });
});
