import { applyCategories } from '../applyCategories';
import { Product, Category } from '../../types';

describe('test apply categories function', () => {
    const products: Product[] = [
        {
            category: 'Для дома',
            description: 'aloha',
            id: 0,
            name: 'Очень нужная вещь 1',
            price: 123,
        },
        {
            category: 'Одежда',
            description: 'nihao',
            id: 10,
            name: 'Очень нужная вещь 2',
            price: 321,
        },
        {
            category: 'Для дома',
            description: 'konishua',
            id: 5,
            name: 'Очень нужная вещь 3',
            price: 135,
        },
        {
            category: 'Электроника',
            description: 'privet',
            id: 7,
            name: 'Очень нужная вещь 4',
            price: 531,
        },
    ];
    const categories: Category[] = ['Для дома', 'Электроника'];
    it('should return the same products list', () => {
        expect(applyCategories(products, [])).toBe(products);
    });
    it('should return only product from "Для дома" and "Электроника"', () => {
        expect(applyCategories(products, categories)).toStrictEqual([
            products[0],
            products[2],
            products[3],
        ]);
    });
});
