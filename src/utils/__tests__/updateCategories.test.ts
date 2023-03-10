import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test updateCategories function', () => {
    let categories: Category[];
    beforeAll(() => {
        categories = ['Для дома', 'Одежда', 'Электроника'];
    });

    it('return categories without changedCategory', () => {
        expect(updateCategories(categories, 'Для дома')).toEqual([
            'Одежда',
            'Электроника',
        ]);
    });

    it('return categories with new changedCategory', () => {
        expect(updateCategories(['Для дома', 'Одежда'], 'Электроника')).toEqual(
            categories
        );
    });
});
