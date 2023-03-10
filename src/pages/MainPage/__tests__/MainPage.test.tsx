import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from '../MainPage';
import { getNextSortBy, updateCategories } from '../../../utils';
import { Category } from '../../../types';

jest.mock('../../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по умолчанию'),
    };
});

jest.mock('../../../utils/updateCategories', () => {
    return {
        __esModule: true,
        updateCategories: jest.fn(() => []),
    };
});

describe('Testing MainPage', () => {
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date('2023-01-01T00:00:00'));
    });
    afterAll(() => {
        jest.useRealTimers();
    });
    afterEach(jest.clearAllMocks);

    it('should render correctly', () => {
        const renderPage = render(<MainPage />);
        expect(renderPage.asFragment()).toMatchSnapshot();
    });

    it('should test sort button click', () => {
        const renderPage = render(<MainPage />);
        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(renderPage.getByText(/Сортировать/));
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });

    it.each(['Для дома', 'Одежда', 'Электроника'] as Category[])(
        'should test category buttons click',
        (category) => {
            const renderPage = render(<MainPage />);
            expect(updateCategories).toHaveBeenCalledTimes(0);
            const lookup = renderPage
                .getAllByText(category)
                .find((el) => el.classList.contains('categories__badge'));
            if (!lookup) {
                expect(lookup).not.toBe(undefined);
                return;
            }
            fireEvent.click(lookup);
            expect(updateCategories).toHaveBeenCalledTimes(1);
        }
    );
});
