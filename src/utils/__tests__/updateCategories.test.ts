import {updateCategories} from '../updateCategories'
import { Category } from '../../types'

describe('Проверка updateCategories', () => {
    test.each<{ current: Category[], changed: Category, expected: Category[] }>([
        { current: [], changed: 'Для дома', expected: ['Для дома'] },
        { current: ['Для дома'], changed: 'Для дома', expected: [] },
        { current: ['Для дома', 'Одежда'], changed: 'Для дома', expected: ['Одежда'] },
        { current: ['Для дома', 'Одежда'], changed: 'Одежда', expected: ['Для дома'] },
        { current: ['Для дома', 'Одежда'], changed: 'Электроника', expected: ['Для дома', 'Одежда', 'Электроника'] },
        { current: ['Для дома', 'Одежда', 'Электроника'], changed: 'Одежда', expected: ['Для дома', 'Электроника'] },

    ])('Текущий список: $current, Изменяемая категория: $changed, Ожидаемый результат: $expected', ({ current, changed, expected }) => {
        expect(updateCategories(current, changed)).toEqual(expected);
    });
});
