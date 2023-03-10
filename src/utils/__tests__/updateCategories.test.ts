import { updateCategories } from '../updateCategories';
import type { Category, SortBy } from '../../types';

const CategoriesMock: Category[] = [
    "Одежда", "Для дома","Электроника"
];

describe('test updateCategories function', () => {
    test('change Одежда', () => {
        const CategoriesResult: Category[] = [
            "Для дома","Электроника"
        ];
        expect(updateCategories(CategoriesMock, "Одежда")).toEqual(CategoriesResult);
    });

    test('change Одежда', () => {
        const CategoriesResult: Category[] = [
            "Одежда","Электроника"
        ];
        expect(updateCategories(CategoriesMock, "Для дома")).toEqual(CategoriesResult);
    });

    test('change Одежда', () => {
        const CategoriesResult: Category[] = [
            "Одежда", "Для дома"
        ];
        expect(updateCategories(CategoriesMock, "Электроника")).toEqual(CategoriesResult);
    });

    test('include Одежда', () => {
        const CategoriesResult: Category[] = [
            "Одежда"
        ];
        expect(updateCategories([], "Одежда")).toEqual(CategoriesResult);
    });

});
