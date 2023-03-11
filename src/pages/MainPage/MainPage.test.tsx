import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { getNextSortBy, updateCategories } from '../../utils';
import { MainPage } from './MainPage';
import { PriceSymbol, Product } from '../../types';

const products: Product[] = [
    {
        id: 1,
        name: 'оладушки',
        description: 'рас рас и готово',
        price: 300,
        priceSymbol: '₽',
        category: 'Одежда',
    },
    {
        id: 2,
        name: 'оладушки2',
        description: 'рас рас и готово2',
        price: 3000,
        priceSymbol: '$',
        category: 'Электроника',
    },
    {
        id: 3,
        name: 'оладушки3',
        description: 'рас рас и готово3',
        price: 30000,
        priceSymbol: '₽',
        category: 'Для дома',
        imgUrl: '/olad.png',
    },
];

afterEach(jest.clearAllMocks);

jest.useFakeTimers().setSystemTime(new Date(2023, 0, 0, 0, 0, 0, 0));

jest.mock('../../hooks/useProducts', () => {
    return {
        __esModule: true,
        useProducts: jest.fn(() => products),
    };
});

jest.mock('../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по возрастанию цены'),
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

jest.mock('../../utils/updateCategories', () => {
    return {
        __esModule: true,
        updateCategories: jest.fn(() => []),
    };
});

describe('MainPage test', () => {
    let rendered: RenderResult;
    beforeEach(() => {
        rendered = render(<MainPage />);
    });

    it('should render correctly', () => {
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should select category once', () => {
        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(rendered.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });

    it('should update categories once', () => {
        expect(updateCategories).toHaveBeenCalledTimes(0);
        const category = rendered
            .getAllByText('Электроника')
            .find((elem) => elem.classList.contains('categories__badge'));
        if (!category) {
            return;
        }

        fireEvent.click(category);
        expect(updateCategories).toHaveBeenCalledTimes(1);
    });
});
