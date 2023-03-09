import { updateCategories } from '../updateCategories';
import type { Category } from '../../types';

const categoriesMock: Category[] = ['Для дома', 'Одежда', 'Электроника',]

describe('Тест функции updateCategories', () => {
    it('Удаление категории ', () => {
        const expected: Category[] = ['Для дома', 'Одежда',];

        expect(updateCategories(categoriesMock, 'Электроника' as Category)).toEqual(expected);
    });

    it('Добавление категории ', () => {
        const categories: Category[] = ['Для дома', 'Одежда',];

        expect(updateCategories(categories, 'Электроника' as Category)).toEqual(categoriesMock);
    });
});
