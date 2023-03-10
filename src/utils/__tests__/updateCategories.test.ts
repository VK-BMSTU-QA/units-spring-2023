import { updateCategories } from '../updateCategories';
import { Category } from '../../types';

describe('test function update categories', () => {
    test.each<{
        currentCategories: Category[];
        changedCategories: Category;
        expected: Category[];
    }>([
        {
            currentCategories: ['Электроника', 'Для дома', 'Одежда'],
            changedCategories: 'Электроника',
            expected: ['Для дома', 'Одежда'],
        },
        {
            currentCategories: ['Для дома', 'Одежда'],
            changedCategories: 'Электроника',
            expected: ['Для дома', 'Одежда', 'Электроника'],
        },
        {
            currentCategories: [],
            changedCategories: 'Электроника',
            expected: ['Электроника'],
        },
    ])(
        'should change category: $changedCategories in current: $currentCategories',
        ({ currentCategories, changedCategories, expected }) => {
            expect(
                updateCategories(currentCategories, changedCategories)
            ).toStrictEqual(expected);
        }
    );
});
