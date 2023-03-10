import { getProductRUBPrice, productComparator } from '../productComparator';
import { Product, SortBy } from '../../types';

describe('test function get RUB price', () => {
    const scrubber: Product = {
        id: 1,
        category: 'Для дома',
        name: 'Ёршик',
        description: 'Супер ёршик',
        price: 15,
        priceSymbol: '$',
    };

    const scrubber_rub: Product = {
        id: 2,
        category: 'Для дома',
        name: 'Ёршик',
        description: 'Супер ёршик',
        price: 15,
        priceSymbol: '₽',
    };

    it('should return correct amount of rubles from $', () => {
        expect(getProductRUBPrice(scrubber)).toBe(1050);
    });

    it('should return correct amount of rubles from ₽', () => {
        expect(getProductRUBPrice(scrubber_rub)).toBe(15);
    });
});

describe('test function product comparator', () => {
    const scrubber: Product = {
        id: 1,
        category: 'Для дома',
        name: 'Ёршик',
        description: 'Супер ёршик',
        price: 15,
        priceSymbol: '$',
    };

    const scrubber_clone: Product = {
        id: 2,
        category: 'Для дома',
        name: 'Ёршик',
        description: 'Супер ёршик',
        price: 15,
        priceSymbol: '$',
    };

    const tShirt: Product = {
        id: 2,
        category: 'Одежда',
        name: 'T-shirt',
        description: 'Travis Scott',
        price: 100000,
        priceSymbol: '₽',
    };

    test.each<{ sortBy: SortBy; lhs: Product; rhs: Product; expected: number }>(
        [
            { sortBy: 'по умолчанию', lhs: scrubber, rhs: tShirt, expected: 0 },
            {
                sortBy: 'по убыванию цены',
                lhs: scrubber,
                rhs: tShirt,
                expected: 1,
            },
            {
                sortBy: 'по убыванию цены',
                lhs: tShirt,
                rhs: scrubber,
                expected: -1,
            },
            {
                sortBy: 'по возрастанию цены',
                lhs: scrubber,
                rhs: tShirt,
                expected: -1,
            },
            {
                sortBy: 'по возрастанию цены',
                lhs: tShirt,
                rhs: scrubber,
                expected: 1,
            },
            {
                sortBy: 'по возрастанию цены',
                lhs: scrubber,
                rhs: scrubber_clone,
                expected: 0,
            },
            {
                sortBy: 'по убыванию цены',
                lhs: scrubber,
                rhs: scrubber_clone,
                expected: 0,
            },
        ]
    )(
        'should return $expected with sort: $sortBy and products: $lhs, $rhs',
        ({ sortBy, lhs, rhs, expected }) => {
            expect(productComparator(sortBy)(lhs, rhs)).toBe(expected);
        }
    );
});
