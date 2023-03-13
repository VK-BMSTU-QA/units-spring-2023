import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test updateCategories function', () => {
    const categories: Category[] = ['Электроника', 'Одежда', 'Для дома'];

    it('test without "Для дома"', () =>
        expect(updateCategories(categories, 'Для дома')).toEqual(
            categories.filter((elem) => elem !== 'Для дома')
        ));

    it('test add "Для дома"', () =>
        expect(
            updateCategories(
                categories.filter((elem) => elem !== 'Для дома'),
                'Для дома'
            )
        ).toEqual(categories));
});
