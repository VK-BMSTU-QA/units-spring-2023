import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test update categories function', () => {
    const categories: Category[] = ['Для дома', 'Одежда'];

    it('should return list without target category', () => {
        expect(updateCategories(categories, 'Для дома')).toStrictEqual([
            categories[1],
        ]);
    });

    it('should return list with target category', () => {
        expect(updateCategories(categories, 'Электроника')).toStrictEqual([
            ...categories,
            'Электроника',
        ]);
    });
});
