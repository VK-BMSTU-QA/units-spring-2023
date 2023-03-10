import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getNextSortBy, updateCategories } from '../../utils';
import { MainPage } from './MainPage';
import { PriceSymbol, Product, Category } from '../../types';

const products: Product[] = [
    {
        id: 1,
        name: 'IPhone 22',
        description: 'Top',
        price: 1000,
        priceSymbol: '$',
        imgUrl: 'img.com',
        category: 'Электроника',
    },
    {
        id: 2,
        name: 'Nike Air Force',
        description: 'Podcraduli',
        price: 14000,
        priceSymbol: '₽',
        imgUrl: 'tapuli.img',
        category: 'Одежда',
    },
]

afterEach(jest.clearAllMocks);

jest.useFakeTimers().setSystemTime(new Date(2023, 0, 1, 3, 0, 0, 0));

jest.mock('../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по убыванию цены'),
    };
});

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn((value: number, symbol: PriceSymbol = '₽'): string =>
            `${value.toLocaleString()} ${symbol}`
        ),
    };
});

jest.mock('../../utils/updateCategories', () => {
    return {
        __esModule: true,
        updateCategories: jest.fn(
            (currentCategories: Category[], changedCategories: Category): Category[] =>{
                return currentCategories
            }
        ),
    };
});

jest.mock('../../hooks/useProducts', () => {
    return {
        __esModule: true,
        useProducts: jest.fn(() => products),
    };
});

describe('test MainPage', () => {
    it('should render correctly', () => {
        const rendered = render(
            <MainPage />
        );
        expect(rendered.asFragment()).toMatchSnapshot();
    });
    it('should call next sort', () => {
        const rendered = render(
            <MainPage />
        );

        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(rendered.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });

    it('should call change categories', () => {
        const rendered = render(
            <MainPage />
        );

        expect(updateCategories).toHaveBeenCalledTimes(0);
        fireEvent.click(rendered.getByText('Для дома'));
        expect(updateCategories).toHaveBeenCalledTimes(1);
    });
});