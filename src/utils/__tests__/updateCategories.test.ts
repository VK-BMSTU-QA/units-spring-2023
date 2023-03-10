import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test update categories function', () => {
    const categories: Category[] = ['Для дома', 'Одежда'];

    it.each<[Category, Category[]]>([
        ['Для дома', [categories[1]]],
        ['Электроника', [...categories, 'Электроника']],
    ])('should return correct list of category', (category, extected) => {
        expect(updateCategories(categories, category)).toStrictEqual(extected);
    });
});
