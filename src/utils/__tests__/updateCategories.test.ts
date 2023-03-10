import { Category } from "../../types";
import { updateCategories } from "../updateCategories";

describe('test updateCategories function', () => {
  let categories : Category [] = [
    'Для дома',
    'Одежда',
    'Электроника'
  ]

  it('return categories without changedCategory', () => {
    expect(updateCategories(categories,'Для дома')).toEqual(categories.filter(el => el !== 'Для дома'));
  });

  it('return categories with new changedCategory', () => {
    expect(updateCategories(categories.filter(el => el !== 'Электроника'),'Электроника')).toEqual(categories);
  });
});