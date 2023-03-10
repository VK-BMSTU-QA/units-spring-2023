import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
    getNextSortBy,
    getPrice,
} from '../../utils';
import { MainPage } from './MainPage';
import { PriceSymbol } from '../../types';

const products = [{
    id: 1,
    name: 'Костюм гуся',
    description: 'Запускаем гуся, работяги',
    price: 1000,
    priceSymbol: '₽',
    category: 'Одежда',
},
{
    id: 2,
    name: 'IPhone 14 Pro',
    description: 'Latest iphone, buy it now',
    price: 999,
    priceSymbol: '$',
    category: 'Электроника',
    imgUrl: '/iphone.png',
},
{
    id: 3,
    name: 'Принтер',
    description: 'Незаменимая вещь для студента',
    price: 7000,
    category: 'Электроника',
}];

afterEach(jest.clearAllMocks);

jest
    .useFakeTimers()
    .setSystemTime(new Date(2011, 0, 1, 3, 0, 0, 0));

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
        getPrice: jest.fn((value: number, symbol: PriceSymbol = '₽'): string =>
            `${value} ${symbol}`
        ),
    };
});

describe('test mainPage', () => {
    it('should render correctly', () => {
        const rendered = render(
            <MainPage />
        );
        expect(rendered.asFragment()).toMatchSnapshot();
    });
    it('should select category', () => {
        const rendered = render(
            <MainPage />
        );

        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(rendered.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });
});