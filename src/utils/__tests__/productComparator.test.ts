import { Product, SortBy } from '../../types';
import { productComparator } from '../productComparator';

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

    it.each([
        ['по умолчанию', product1dollar, product100rubble],
        ['по возрастанию цены', product100rubble, product100rubble],
    ] as [SortBy, Product, Product][])(
        'should returt 0',
        (comparator, productLeft, productRight) => {
            expect(
                productComparator(comparator)(productLeft, productRight)
            ).toBe(0);
        }
    );

    it.each([
        ['по убыванию цены', product1dollar, product100rubble],
        ['по возрастанию цены', product100rubble, product1dollar],
    ] as [SortBy, Product, Product][])(
        'should returt 1',
        (comparator, productLeft, productRight) => {
            expect(
                productComparator(comparator)(productLeft, productRight)
            ).toBe(1);
        }
    );

    it.each([
        ['по убыванию цены', product100rubble, product1dollar],
        ['по возрастанию цены', product1dollar, product100rubble],
    ] as [SortBy, Product, Product][])(
        'should returt -1',
        (comparator, productLeft, productRight) => {
            expect(
                productComparator(comparator)(productLeft, productRight)
            ).toBe(-1);
        }
    );
});
