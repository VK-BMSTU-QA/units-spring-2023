import { Category } from '../../types';
import { updateCategories } from '../updateCategories';

describe('test updateCategories function', () => {
    const homeCategory: Category = 'Для дома';
    const eclectroCategory: Category = 'Электроника';
    const clothesCategory: Category = 'Одежда';

    it('should return products that include changed category', () => {
        expect(
            updateCategories(
                [homeCategory, clothesCategory, eclectroCategory],
                clothesCategory
            )
        );
    });
});
