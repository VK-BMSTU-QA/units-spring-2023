import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
import { updateCategories, getNextSortBy} from '../../utils';

afterEach(jest.clearAllMocks);

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

jest.mock('../../utils/updateCategories', () => {
    return {
        __esModule: true,
        updateCategories: jest.fn(() => []),
    };
});

jest.mock('../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по возрастанию цены'),
    };
});

describe('Main page', () => {

    test('render', () => {
        const renderedPage = render(<MainPage/>);
        expect(renderedPage.asFragment()).toMatchSnapshot();
    });

    test('Category button click', () => {
        const renderedPage = render(<MainPage/>)
        expect(updateCategories).toHaveBeenCalledTimes(0);
        fireEvent.click(renderedPage.getByTestId('Одежда'));
        expect(updateCategories).toHaveBeenCalledTimes(1);
    });

    test('Sort Button click', () => {
        const renderedPage = render(<MainPage/>)
        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(renderedPage.getByText('Сортировать по умолчанию'));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });
});
