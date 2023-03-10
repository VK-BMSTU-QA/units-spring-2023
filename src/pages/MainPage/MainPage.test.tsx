import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
import { Category, SortBy } from '../../types';
import { useProducts } from '../../hooks';
import { applyCategories, getNextSortBy, updateCategories } from '../../utils';

jest.mock('../../utils/applyCategories', () => {
    return {
        __esModule: true,
        applyCategories: jest.fn(() => []),
    };
});

jest.mock('../../utils/getNextSortBy', () => {
    return {
        __esModule: true,
        getNextSortBy: jest.fn(() => 'по умолчанию'),
    };
});

jest.mock('../../utils/updateCategories', () => {
    return {
        __esModule: true,
        updateCategories: jest.fn(() => ['Для дома']),
    };
});

describe('test MainPage function', () => {
    afterEach(jest.clearAllMocks);
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date('March 10, 2023 12:00:00'));
    });
    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render correctly', () => {
        const renderPage = render(<MainPage />);
        expect(renderPage.asFragment()).toMatchSnapshot();
    });

    it('should call updateCategories by clicking category', () => {
        const clickedCategory: Category = 'Для дома';

        render(<MainPage />);

        const categoryButton = screen.getByText(clickedCategory, {
            selector: '.categories__badge',
        });
        categoryButton.click();

        expect(updateCategories).toHaveBeenCalledWith([], clickedCategory);
    });

    it('should call getNextSort function when sort button clicked', () => {
        const sortType: SortBy = 'по умолчанию';

        render(<MainPage />);

        const sortButton = screen.getByText('Сортировать ' + sortType);
        sortButton.click();

        expect(getNextSortBy).toHaveBeenCalled();
    });

    it('should call applyCategories with the correct arguments', () => {
        const selectedCategories: Category[] = ['Для дома', 'Одежда'];

        render(<MainPage />);

        const categoryButtonOne = screen.getByText(selectedCategories[1], {
            selector: '.categories__badge',
        });
        categoryButtonOne.click();
        const categoryButtonZero = screen.getByText(selectedCategories[0], {
            selector: '.categories__badge',
        });

        categoryButtonZero.click();

        expect(applyCategories).toHaveBeenCalledWith(useProducts(), []);
    });
});
