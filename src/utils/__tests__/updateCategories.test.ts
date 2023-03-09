import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test update categories function: adding', () => {
    it('should add category to blank category list', () => {
        const categories: Category[] = []
        const category: Category = 'Для дома';
        const result: Category[] = ['Для дома'];
        expect(updateCategories(categories, category)).toStrictEqual(result);
    });
    it('should add category to not blank category list', () => {
        const categories: Category[] = ['Одежда', 'Электроника']
        const category: Category = 'Для дома';
        const result: Category[] = ['Одежда', 'Электроника', 'Для дома'];
        expect(updateCategories(categories, category)).toStrictEqual(result);
    });
});

describe('test update categories function: removing', () => {
    it('should remove element', () => {
        const categories: Category[] = ['Одежда', 'Электроника']
        const category: Category = 'Одежда';
        const result: Category[] = ['Электроника'];
        expect(updateCategories(categories, category)).toStrictEqual(result);
    });
});
