import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test updateCategories function', () => {
    const homeCategory: Category = 'Для дома';
    const electroCategory: Category = 'Электроника';
    const clothesCategory: Category = 'Одежда';

    test.each<{
        currCategories: Category[];
        changedCategories: Category;
        expected: Category[];
    }>([
        {
            currCategories: [homeCategory, electroCategory, clothesCategory],
            changedCategories: homeCategory,
            expected: [electroCategory, clothesCategory],
        },
        {
            currCategories: [homeCategory, clothesCategory],
            changedCategories: electroCategory,
            expected: [homeCategory, clothesCategory, electroCategory],
        },
    ])(
        'should return products that include changed category',
        ({ currCategories, changedCategories, expected }) => {
            expect(
                updateCategories(currCategories, changedCategories)
            ).toStrictEqual(expected);
        }
    );
});
