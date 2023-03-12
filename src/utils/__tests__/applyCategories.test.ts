import { Product } from '../../types';
import { applyCategories } from '../applyCategories';

describe('test applyCategories function', () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'some name',
            description: 'some description',
            price: 100,
            category: 'Электроника',
        },
        {
            id: 2,
            name: 'some name',
            description: 'some description',
            price: 100,
            category: 'Для дома',
        },
        {
            id: 3,
            name: 'some name',
            description: 'some description',
            price: 100,
            category: 'Одежда',
        },
    ];
    it('no categories', () => {
        expect(applyCategories(products, [])).toEqual(products);
    });
    it('all categories', () => {
        expect(
            applyCategories(products, ['Одежда', 'Электроника', 'Для дома'])
        ).toEqual(products);
    });
    it('some category', () => {
        expect(applyCategories(products, ['Одежда'])).toEqual(
            products.filter((el) => el.category === 'Одежда')
        );
    });
});
