import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
import { getNextSortBy, updateCategories } from '../../utils';
import { PriceSymbol } from '../../types';

jest.mock('../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по умолчанию'),
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
        updateCategories: jest.fn((categories, category) => []),
    };
});

jest.useFakeTimers().setSystemTime(new Date('2000-01-09T04:54:00'));

//afterAll(() => jest.useRealTimers());

afterEach(jest.clearAllMocks);

describe('test MainPage', () => {
    it('test MainPage render', () => {
        const renderedMainPage = render(<MainPage />);
        expect(renderedMainPage.asFragment()).toMatchSnapshot();
    });

    it('test updateCategories call', () => {
        const renderedMainPage = render(<MainPage />);
        expect(updateCategories).toHaveBeenCalledTimes(0);
        const category = renderedMainPage
            .getAllByText('Для дома')
            .find((el) => el.classList.contains('categories__badge'));

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fireEvent.click(category);
        expect(updateCategories).toHaveBeenCalledTimes(1);
    });

    it('test getNextSortBy call', () => {
        const renderedMainPage = render(<MainPage />);
        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(renderedMainPage.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });
});
