import { Product } from "../../types";
import { productComparator } from "../productComparator";

describe('test productComparator function', () => {
    let product: Pick<Product, 'price'>[];
    beforeAll(() => {
        product = [
            {
                price: 1_000,
            },
            {
                price: 200,
            },
            {
                price: 3_000,
            },
        ];
    })
    it('return 0 if sortBy === по умолчанию', () => {
        expect(productComparator('по умолчанию')(product[0] as Product,product[1] as Product)).toBe(0);
    });
    it('return 0 if first price === second price', () => {
        expect(productComparator('по убыванию цены')(product[0] as Product,product[0] as Product)).toBe(0);
    });
    it('return 1 if sortBy === по убыванию цены and 2 product > 1 product ', () => {
        expect(productComparator('по убыванию цены')(product[1] as Product,product[0] as Product)).toBe(1);
    });
    it('return -1 if sortBy === по убыванию цены and 1 product > 2 product ', () => {
        expect(productComparator('по убыванию цены')(product[0] as Product,product[1] as Product)).toBe(-1);
    });
    it('return -1 if sortBy === по возрастанию цены цены and 2 product > 1 product ', () => {
        expect(productComparator('по возрастанию цены')(product[1] as Product,product[0] as Product)).toBe(-1);
    });
    it('return 1 if sortBy === по возрастанию цены and 1 product > 2 product ', () => {
        expect(productComparator('по возрастанию цены')(product[0] as Product,product[1] as Product)).toBe(1);
    });
});