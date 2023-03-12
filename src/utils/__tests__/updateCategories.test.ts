import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test updateCategories function', () => {
    const categories: Category[] = ['Для дома', 'Одежда', 'Электроника'];

    it('Удаление категории', () => {
        expect(updateCategories(categories, 'Электроника')).toEqual(
            categories.filter((el) => el !== 'Электроника')
        );
    });

    it('Добавление категории', () => {
        expect(
            updateCategories(
                categories.filter((el) => el !== 'Электроника'),
                'Электроника'
            )
        ).toEqual(categories);
    });
});
