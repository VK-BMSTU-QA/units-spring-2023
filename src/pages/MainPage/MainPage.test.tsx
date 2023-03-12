import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { applyCategories, getNextSortBy } from '../../utils';
import { MainPage } from './MainPage';
import { Category, PriceSymbol, Product } from '../../types';

const products: Product[] = [
    {
        id: 1,
        name: 'some product 1',
        description: 'some description',
        price: 25000,
        priceSymbol: '$',
        category: 'Для дома',
    },
    {
        id: 2,
        name: 'some product 2',
        description: 'some description',
        price: 5000,
        priceSymbol: '$',
        category: 'Для дома',
        imgUrl: './someImg.png',
    },
    {
        id: 3,
        name: 'some product 3',
        description: 'some description',
        price: 200000,
        priceSymbol: '₽',
        category: 'Электроника',
    },
];

afterEach(jest.clearAllMocks);
afterEach(jest.useRealTimers);

jest.useFakeTimers().setSystemTime(new Date(2023, 3, 12, 12, 0, 0, 0));
jest.mock('../../hooks/useProducts', () => {
    return {
        __esModule: true,
        useProducts: jest.fn(() => products),
    };
});
jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(
            (value: number, symbol: PriceSymbol = '₽'): string =>
                `${value.toLocaleString('ru-RU')} ${symbol}`
        ),
    };
});
jest.mock('../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по возрастанию цены'),
    };
});
jest.mock('../../utils/applyCategories', () => {
    return {
        __esModule: true,
        applyCategories: jest.fn(
            (products: Product[], categories: Category[]): Product[] => {
                if (!categories.length) return products;

                return products.filter((product) =>
                    categories.includes(product.category)
                );
            }
        ),
    };
});
describe('test mainPage', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const rendered = render(<MainPage />);

    it('rendering', () => {
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('getNextSortBy', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const sortRendered = render(<MainPage />);

        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(sortRendered.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });
});
