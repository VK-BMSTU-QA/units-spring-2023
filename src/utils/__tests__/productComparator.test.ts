import { productComparator } from '../productComparator';
import type { Product, SortBy } from '../../types';

describe('test productComparator function', () => {
    const lProduct: Product = {
        id: 21,
        name: 'Smartphone',
        category: 'Электроника',
        description: 'Description',
        price: 256,
    };
    const rProduct: Product = {
        id: 21,
        name: 'Headphones',
        category: 'Электроника',
        description: 'Description',
        price: 128,
    };
    const eqProduct: Product = {
        id: 21,
        name: 'gloves',
        category: 'Одежда',
        description: 'Description',
        price: 256,
    };

    const lessVal: SortBy = 'по убыванию цены';
    const moreVal: SortBy = 'по возрастанию цены';
    const defaultVal: SortBy = 'по умолчанию';

    const zeroRes = 0;
    const plusRes = 1;
    const minusRes = -1;

    test.each<{
        sortType: SortBy;
        product: Product;
        otherProduct: Product;
        expected: number;
    }>([
        {
            sortType: defaultVal,
            product: lProduct,
            otherProduct: rProduct,
            expected: zeroRes,
        },
        {
            sortType: lessVal,
            product: rProduct,
            otherProduct: lProduct,
            expected: plusRes,
        },
        {
            sortType: moreVal,
            product: rProduct,
            otherProduct: lProduct,
            expected: minusRes,
        },
        {
            sortType: lessVal,
            product: lProduct,
            otherProduct: rProduct,
            expected: minusRes,
        },
        {
            sortType: moreVal,
            product: lProduct,
            otherProduct: rProduct,
            expected: plusRes,
        },
        {
            sortType: lessVal,
            product: lProduct,
            otherProduct: eqProduct,
            expected: zeroRes,
        },
    ])(
        'should return boolean value that depends on comparing products fields',
        ({ sortType, product, otherProduct, expected }) => {
            expect(productComparator(sortType)(product, otherProduct)).toBe(
                expected
            );
        }
    );
});
