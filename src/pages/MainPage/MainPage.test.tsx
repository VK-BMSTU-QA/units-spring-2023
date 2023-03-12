import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getNextSortBy, applyCategories } from '../../utils';
import { MainPage } from './MainPage';
import { Category, PriceSymbol, Product } from '../../types';

const products: Product[] = [
    {
        id: 1,
        name: 'product 1',
        description: 'description 1',
        price: 10,
        priceSymbol: '$',
        category: 'Для дома',
    },
    {
        id: 2,
        name: 'product 2',
        description: 'description 1',
        price: 100,
        priceSymbol: '$',
        category: 'Для дома',
        imgUrl: './someImg.png',
    },
    {
        id: 3,
        name: 'product 3',
        description: 'description 3',
        price: 1000,
        priceSymbol: '₽',
        category: 'Электроника',
    },
];

afterEach(jest.clearAllMocks);
afterEach(jest.useRealTimers);

jest.useFakeTimers().setSystemTime(new Date(2012, 12, 12, 12, 0, 0, 0));

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

describe('MainPage view', () => {
    it('rendering', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const rendered = render(<MainPage />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('getNextSortBy called once', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const rendered = render(<MainPage />);

        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(rendered.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });

    it('applyCategories called once', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<MainPage />);
        expect(applyCategories).toHaveBeenCalledTimes(1);
    });
});
