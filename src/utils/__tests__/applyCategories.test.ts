import { Product } from '../../types';
import { applyCategories } from '../applyCategories';

describe('test applyCategories function', () => {
    let product: Pick<Product, 'category'>[];
    beforeAll(() => {
        product = [
            {
                category: 'Электроника'
            },
            {
                category: 'Для дома'
            },
            {
                category: 'Одежда'
            },
        ];
    })
    it('should return products if categories.length === 0', () => {
        expect(applyCategories(product as Product[], [])).toEqual(product);
    });
    it('should return products with transferred categories', () => {
        expect(applyCategories(product as Product[], ['Одежда'])).toEqual(product.filter(el=> el.category === 'Одежда'));
    });
});
