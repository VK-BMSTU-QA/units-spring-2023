import { updateCategories } from '../updateCategories';

describe('test update categories function', () => {
    it('should return array of categories excluding selected categories', () => {
        expect(
            updateCategories(['Электроника', 'Одежда', 'Для дома'], 'Для дома')
        ).toStrictEqual(['Электроника', 'Одежда']);
    });

    it('should return array of categories including selected categories', () => {
        expect(
            updateCategories(['Электроника', 'Одежда'], 'Для дома')
        ).toStrictEqual(['Электроника', 'Одежда', 'Для дома']);
    });

    it('should return array of selected categories', () => {
        expect(updateCategories([], 'Для дома')).toStrictEqual(['Для дома']);
    });

    it('should return empty array of categories', () => {
        expect(updateCategories(['Для дома'], 'Для дома')).toStrictEqual([]);
    });
});
