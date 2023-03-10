import { Category, Product } from '../../types';
import { applyCategories } from '../applyCategories';

describe('applyCategories test cases', () => {
    let productsMock: Product[] = [];
    beforeEach(() => {
        productsMock = [
            {
                id: 1,
                name: 'first_prod',
                description: 'desc 1',
                price: 11,
                priceSymbol: '₽',
                category: 'Для дома',
            },
            {
                id: 2,
                name: 'second_prod',
                description: 'desc 2',
                price: 22,
                priceSymbol: '$',
                category: 'Одежда',
            },
            {
                id: 3,
                name: 'third_prod',
                description: 'desc 3',
                price: 33,
                priceSymbol: '₽',
                category: 'Электроника',
            },
            {
                id: 4,
                name: 'fourth_prod',
                description: 'desc 4',
                price: 44,
                priceSymbol: '₽',
                category: 'Для дома',
            },
            {
                id: 5,
                name: 'fifth_prod',
                description: 'desc 5',
                price: 55,
                priceSymbol: '$',
                category: 'Одежда',
            },
            {
                id: 6,
                name: 'sixth_prod',
                description: 'desc 6',
                price: 66,
                priceSymbol: '₽',
                category: 'Электроника',
            },
        ];
    });

    describe('Выбор по одной категории', () => {
        test.each<Category>(
            [
                'Электроника', 'Для дома', 'Одежда'
            ]
        )('Категория %s', (category) => {
            let filteredProds = applyCategories(productsMock, [category]);
            expect(filteredProds.length).toBe(2);
            filteredProds.forEach(prod => expect(prod.category).toEqual(category));
        });
    });

    describe('Выбор по нескольким категориям', () => {
        test.each<Category[]>(
            [
                ['Для дома', 'Одежда'],
                ['Для дома', 'Электроника'],
                ['Электроника', 'Одежда']
            ]
        )('Катерории %s', (...categories) => {
            let filteredProds = applyCategories(productsMock, categories);
            expect(filteredProds.length).toBe(4);
            filteredProds.forEach(prod => expect(categories).toContainEqual(prod.category));

        });
    });

    test('Пуской список категорий', () => {
        let filteredProds = applyCategories(productsMock, []);
        expect(filteredProds.length).toBe(6);
    });

    test('Пуской список продуктов', () => {
        let filteredProds = applyCategories([], ['Для дома']);
        expect(filteredProds.length).toBe(0);
        expect(filteredProds).toEqual([]);
    });

    test('Пуской список продуктов и категорий', () => {
        let filteredProds = applyCategories([], []);
        expect(filteredProds.length).toBe(0);
        expect(filteredProds).toEqual([]);
    });
});
