import type { Category } from '../../types';
import { updateCategories } from '../updateCategories';


const table: Array<[Category[], Category, Category[]]> = [
    [
        ['Для дома', 'Одежда', 'Электроника'],
        'Электроника',
        ['Для дома', 'Одежда']
    ],
    [
        ['Для дома', 'Электроника'],
        'Одежда',
        ['Для дома', 'Электроника', 'Одежда']
    ]
]

test.each(table)('Change category', (categories, changedcategory, expected) => {
    expect(updateCategories(categories, changedcategory)).toStrictEqual(expected);
});