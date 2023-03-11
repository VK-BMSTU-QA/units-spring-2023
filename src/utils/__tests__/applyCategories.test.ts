import { Product } from '../../types';
import { applyCategories } from '../applyCategories';

describe('test applyCategories function', () => {
    let product: Product[];
    beforeAll(() => {
        product = [
            {
                id: 1,
                name: 'string',
                description: 'string',
                price: 300,
                priceSymbol: '$',
                category: 'Электроника',
            },
            {
                id: 2,
                name: 'string',
                description: 'string',
                price: 400,
                priceSymbol: '$',
                category: 'Для дома',
            },
            {
                id: 3,
                name: 'string',
                description: 'string',
                price: 500,
                priceSymbol: '$',
                category: 'Одежда',
            },
        ];
    });

    it('should return products if categories empty', () => {
        expect(applyCategories(product, [])).toEqual(product);
    });

    it('should return products applied categories', () => {
        expect(applyCategories(product, ['Одежда'])).toEqual([product[2]]);
    });
});
