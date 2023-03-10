import {Product} from "../../types";
import {productComparator} from "../productComparator";

describe('test productComparator function', () => {
    let productsTestDataBefore: Product[] = [
        {
            id: 23,
            name: "some name",
            description: "some description",
            price: 323,
            category: "Электроника"
        },
        {
            id: 23,
            name: "some name",
            description: "some",
            price: 4245,
            category: "Одежда"
        },
        {
            id: 23,
            name: "some name",
            description: "some",
            price: 34646,
            category: "Для дома"
        },
        {
            id: 23,
            name: "some name",
            description: "some",
            price: 353636,
            category: "Для дома"
        }
    ];

    it('return 0 if sortBy === по умолчанию', () => {
        expect(productComparator('по умолчанию')(productsTestDataBefore[1], productsTestDataBefore[2])).toBe(0);
    });

    it('return 1 if sortBy === по убыванию цены and 2 product > 1 product', () => {
        expect(productComparator('по убыванию цены')(productsTestDataBefore[1], productsTestDataBefore[2])).toBe(1);
    });

    it('return 1 if sortBy === по убыванию цены and 2 product > 1 product', () => {
        expect(productComparator('по убыванию цены')(productsTestDataBefore[1], productsTestDataBefore[2])).toBe(1);
    });

    it('return 1 if sortBy === по возрастанию цены and 1 product > 2 product', () => {
        expect(productComparator('по убыванию цены')(productsTestDataBefore[1], productsTestDataBefore[2])).toBe(1);
    });

    it('return -1 if sortBy === по возрастанию цены цены and 2 product > 1 product', () => {
        expect(productComparator('по возрастанию цены')(productsTestDataBefore[1], productsTestDataBefore[2])).toBe(-1);
    });

    it('return -1 if sortBy === по возрастанию цены цены and 2 product > 1 product', () => {
        expect(productComparator('по возрастанию цены')(productsTestDataBefore[1], productsTestDataBefore[2])).toBe(-1);
    });
});
