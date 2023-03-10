import { applyCategories } from '../applyCategories';
import type { Category, Product } from '../../types';

const productsMock: Product[] = [
    {
        id: 1,
        name: 'Наушники',
        description: 'Беспроводные наушники',
        price: 10000,
        category: 'Электроника',
    },
    {
        id: 2,
        name: 'Диван',
        description: 'Красный кожаный диван',
        price: 200000,
        category: 'Для дома',
    },
    {
        id: 3,
        name: 'Платье',
        description: 'Летнее шифоновое платье',
        price: 5000,
        category: 'Одежда',
    },
]

describe('Тест функции applyCategories', () => {
    it.each([
        [productsMock, ['Электроника'], [
            {
                ...productsMock[0]
            }] as Product[]],
        [productsMock, ['Для дома', 'Еда'], [
            {
                ...productsMock[1]
            }] as Product[]]
    ])('Выбор товаров, удовлетворяющих одной категории', (products, categoriesMock, expected) => {
        const categories: Category[] = categoriesMock as Category[];

        expect(applyCategories(products, categories)).toEqual(expected);
    });

    it.each([
        [productsMock, ['Электроника', 'Для дома'], [
            {
                ...productsMock[0],
            },
            {
                ...productsMock[1]
            }] as Product[]],
        [productsMock, ['Для дома', 'Еда', 'Одежда'], [
            {
                ...productsMock[1]
            },
            {
                ...productsMock[2]
            }] as Product[]]
    ])('Выбор товаров, удовлетворяющих нескольким категориям', (products, categoriesMock, expected) => {
        const categories: Category[] = categoriesMock as Category[];

        expect(applyCategories(products, categories)).toEqual(expected);
    });

    it('Выбор товаров, если не выбрана ни одна категория', () => {
        const categories: Category[] = [] as Category[];

        expect(applyCategories(productsMock, categories)).toEqual(productsMock);
    });
});
