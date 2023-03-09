import { Category } from "../../types";
import { updateCategories } from "../updateCategories";

describe('test updateCategories function', () => {
    let catgories: Category[];
    beforeAll(() => {
        catgories = [
            'Для дома',
            'Одежда',
            'Электроника'
        ]
    });
    it('return catgories without changedCategory', () => {
        expect(updateCategories(catgories,'Для дома')).toEqual<Category[]>(catgories.filter(el => el !== 'Для дома'));
    });
    it('return catgories with new changedCategory', () => {
        expect(updateCategories(catgories.filter(el => el !== 'Электроника'),'Электроника')).toEqual<Category[]>(catgories);
    });
});