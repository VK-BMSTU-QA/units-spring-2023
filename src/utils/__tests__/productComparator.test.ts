import { productComparator } from '../productComparator';
import { Product } from '../../types';

describe('test productComparator function', () => {
    const productsMock: Product[] = [
        {
            id: 1,
            name: 'test Электроника',
            description: 'описание Электроника',
            price: 111,
            priceSymbol: '$',
            category: 'Электроника',
        },
        {
            id: 1,
            name: 'test Одежда',
            description: 'описание Одежда',
            price: 222,
            priceSymbol: '$',
            category: 'Одежда',
        },
    ];

    it('test "по умолчанию"', () =>
        expect(
            productComparator('по умолчанию')(productsMock[0], productsMock[1])
        ).toBe(0));

    it('test "по убыванию цены"', () =>
        expect(
            productComparator('по убыванию цены')(
                productsMock[0],
                productsMock[1]
            )
        ).toBe(1));

    it('test "по убыванию цены"', () =>
        expect(
            productComparator('по убыванию цены')(
                productsMock[1],
                productsMock[0]
            )
        ).toBe(-1));

    it('test "по возрастанию цены"', () =>
        expect(
            productComparator('по возрастанию цены')(
                productsMock[0],
                productsMock[1]
            )
        ).toBe(-1));

    it('test "по возрастанию цены"', () =>
        expect(
            productComparator('по возрастанию цены')(
                productsMock[1],
                productsMock[0]
            )
        ).toBe(1));
});
