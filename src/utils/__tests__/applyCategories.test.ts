import { applyCategories } from '../applyCategories';
import { Product, Category } from '../../types';

describe('test apply categories function', () => {
    it('should return products with no categories provided', () => {
        const products: Product[] = [
            {
                id: 0,
                name: "electrProd",
                description: "",
                price: 100,
                category: "Электроника"
            },
            {
                id: 2,
                name: "homeProd",
                description: "",
                price: 100,
                category: "Для дома"
            },
            {
                id: 3,
                name: "clothProd",
                description: "",
                price: 100,
                category: "Одежда"
            },
        ];
        const categories: Category[] = [];
        const result: Product[] = products;
        expect(applyCategories(products, categories)).toStrictEqual(result);
    });
    it('should return products with one category provided', () => {
        const products: Product[] = [
            {
                id: 0,
                name: "electrProd1",
                description: "",
                price: 100,
                category: "Электроника"
            },
            {
                id: 2,
                name: "homeProd",
                description: "",
                price: 100,
                category: "Для дома"
            },
            {
                id: 3,
                name: "clothProd",
                description: "",
                price: 100,
                category: "Одежда"
            },
            {
                id: 4,
                name: "electrProd2",
                description: "",
                price: 100,
                category: "Электроника"
            },
        ];
        const categories: Category[] = ["Электроника"];
        const result: Product[] = [
            {
                id: 0,
                name: "electrProd1",
                description: "",
                price: 100,
                category: "Электроника"
            },
            {
                id: 4,
                name: "electrProd2",
                description: "",
                price: 100,
                category: "Электроника"
            },
        ];
        expect(applyCategories(products, categories)).toStrictEqual(result);
    });
    it('should return products with multiple category provided', () => {
        const products: Product[] = [
            {
                id: 0,
                name: "electrProd1",
                description: "",
                price: 100,
                category: "Электроника"
            },
            {
                id: 2,
                name: "homeProd",
                description: "",
                price: 100,
                category: "Для дома"
            },
            {
                id: 3,
                name: "clothProd",
                description: "",
                price: 100,
                category: "Одежда"
            },
            {
                id: 4,
                name: "electrProd2",
                description: "",
                price: 100,
                category: "Электроника"
            },
        ];
        const categories: Category[] = ["Электроника", "Одежда"];
        const result: Product[] = [
            {
                id: 0,
                name: "electrProd1",
                description: "",
                price: 100,
                category: "Электроника"
            },
            {
                id: 3,
                name: "clothProd",
                description: "",
                price: 100,
                category: "Одежда"
            },
            {
                id: 4,
                name: "electrProd2",
                description: "",
                price: 100,
                category: "Электроника"
            },
        ];
        expect(applyCategories(products, categories)).toStrictEqual(result);
    });
});
