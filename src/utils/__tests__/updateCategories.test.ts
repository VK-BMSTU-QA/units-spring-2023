import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('testing updateCategories function', () => {
    const categories: Category[] = ['Для дома', 'Одежда', 'Электроника'];

    it('add category', () => {
        expect(
            updateCategories(
                categories.filter((c) => c !== 'Электроника'),
                'Электроника'
            )
        ).toEqual(categories);
    });

    it('remove category', () => {
        expect(updateCategories(categories, 'Одежда')).toEqual(
            categories.filter((c) => c !== 'Одежда')
        );
    });
});
