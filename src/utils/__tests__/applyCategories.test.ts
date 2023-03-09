import { applyCategories } from "../applyCategories";
import { Product } from "../../types";
import { Category } from "../../types";


describe("test applyCategories function - OK", () => {
  //  Tests data init
  let productsTestDataBefore : Product[] = [
    {
      id: 23,
      name: "some name",
      description: "some description",
      price: 444,
      category: "Электроника"
    },
    {
      id: 23,
      name: "some name",
      description: "some",
      price: 444,
      category: "Одежда"
    },
    {
      id: 23,
      name: "some name",
      description: "some",
      price: 444,
      category: "Для дома"
    },
    {
      id: 23,
      name: "some name",
      description: "some",
      price: 444,
      category: "Для дома"
    }
  ];

  let categoryTestDataBefore : Category[] = [
    "Электроника",
    "Для дома",
    "Одежда"
  ];

  //  Action tests
  it('should return all products', () => {
    expect(applyCategories(productsTestDataBefore, categoryTestDataBefore)).toEqual(productsTestDataBefore);
  });

  it('should return all products, null category', () => {
    expect(applyCategories(productsTestDataBefore, [])).toEqual(productsTestDataBefore);
  });

  it('only Для дома', () => {
    expect(applyCategories(productsTestDataBefore, ["Для дома"])).toEqual(productsTestDataBefore.filter(el => el.category ===  "Для дома"));
  });
});