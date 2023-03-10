import { applyCategories } from '../applyCategories';
import { Product } from '../../types';

describe('test apply categories function', () => {
    const testProduct: Product = {
        id: 1,
        name: 'test',
        category: 'Одежда',
        description: 'test',
        price: 100,
        priceSymbol: '₽',
    };

    it('should return empty array with empty input', () => {
        expect(applyCategories([], [])).toEqual([]);
    });

    it('should return all products with no filters', () => {
        expect(applyCategories([testProduct, testProduct], [])).toEqual([testProduct, testProduct]);
    });

    it('should return only products which match with filters (1 filter)', () => {
        expect(
            applyCategories(
                [
                    testProduct,
                    { ...testProduct, category: 'Электроника' },
                    { ...testProduct, category: 'Для дома' },
                ],
                ['Электроника']
            )
        ).toEqual([{ ...testProduct, category: 'Электроника' }]);
    });

    it('should return only products which match with filters (2 filters)', () => {
        expect(
            applyCategories(
                [
                    testProduct,
                    { ...testProduct, category: 'Электроника' },
                    { ...testProduct, category: 'Для дома' },
                ],
                ['Электроника', 'Одежда']
            )
        ).toEqual([testProduct, { ...testProduct, category: 'Электроника' }]);
    });

    it('should return only products which match with filters (3 filters)', () => {
        expect(
            applyCategories(
                [
                    testProduct,
                    { ...testProduct, category: 'Электроника' },
                    { ...testProduct, category: 'Для дома' },
                ],
                ['Электроника', 'Для дома', 'Одежда']
            )
        ).toEqual([
            testProduct,
            { ...testProduct, category: 'Электроника' },
            { ...testProduct, category: 'Для дома' },
        ]);
    });
});
