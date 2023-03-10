import { applyCategories } from '../applyCategories';
import type { Category, Product} from '../../types';

const ProductsMock: Product[] = [
    {
        id: 1,
        name: 'IPhone 14 Pro',
        description: 'Latest iphone, buy it now',
        price: 999,
        priceSymbol: '$',
        category: 'Электроника',
        imgUrl: '/iphone.png',
    },
    {
        id: 2,
        name: 'Костюм гуся',
        description: 'Запускаем гуся, работяги',
        price: 1000,
        priceSymbol: '₽',
        category: 'Одежда',
    },
    {
        id: 3,
        name: 'Настольная лампа',
        description: 'Говорят, что ее использовали в pixar',
        price: 699,
        category: 'Для дома',
        imgUrl: '/lamp.png',
    },
    {
        id: 4,
        name: 'Принтер',
        description: 'Незаменимая вещь для студента',
        price: 7000,
        category: 'Электроника',
    },
];

describe('test apply categories function', () => {
    test('should return products with category Одежда', () => {
        const resultProducts = ProductsMock.filter(elem => elem.category == "Одежда");
        const selectedCategory: Category[] = ['Одежда'];
        expect(applyCategories(ProductsMock, selectedCategory)).toEqual(resultProducts);
    });

    test('should return products with category Для дома', () => {
        const resultProducts = ProductsMock.filter(elem => elem.category == "Для дома");
        const selectedCategory: Category[] = ['Для дома'];
        expect(applyCategories(ProductsMock, selectedCategory)).toEqual(resultProducts);
    });

    test('should return products with category Электроника', () => {
        const resultProducts = ProductsMock.filter(elem => elem.category == "Электроника");
        const selectedCategory: Category[] = ['Электроника'];
        expect(applyCategories(ProductsMock, selectedCategory)).toEqual(resultProducts);
    });

    test('should return products with categories Для дома, Одежда', () => {
        const resultProducts = ProductsMock.filter(elem => elem.category == "Для дома" || elem.category == "Одежда");
        const selectedCategory: Category[] = ['Одежда', 'Для дома'];
        expect(applyCategories(ProductsMock, selectedCategory)).toEqual(resultProducts);
    });

    test('should return all products', () => {
        const resultProducts = ProductsMock;
        const selectedCategory: Category[] = [];
        expect(applyCategories(ProductsMock, selectedCategory)).toEqual(resultProducts);
    });
});
