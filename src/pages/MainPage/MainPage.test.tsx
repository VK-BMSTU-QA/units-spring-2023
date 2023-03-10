import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
import { Category, SortBy } from '../../types';
import { useCurrentTime, useProducts } from '../../hooks';
import { applyCategories, getNextSortBy, updateCategories } from '../../utils';

jest.mock('../../hooks/useCurrentTime');
jest.mock('../../utils');

describe('test MainPage function', () => {
    afterEach(jest.clearAllMocks);

    it('should render main page with current time', () => {
        const currentTime = 'March 10, 2023 12:00:00';

        const mockedCurrTime = useCurrentTime as jest.MockedFunction<
            typeof useCurrentTime
        >;
        const mockedApplyCategory = applyCategories as jest.MockedFunction<
            typeof applyCategories
        >;
        mockedCurrTime.mockReturnValue(currentTime);
        mockedApplyCategory.mockReturnValue([]);

        render(<MainPage />);

        expect(screen.getByText('VK Маркет')).toBeInTheDocument();
        expect(screen.getByText(currentTime)).toBeInTheDocument();
    });

    it('should call updateCategories by clicking category', () => {
        const clickedCategory: Category = 'Для дома';

        const mockedUpdateCategories = updateCategories as jest.MockedFunction<
            typeof updateCategories
        >;
        const mockedApplyCategory = applyCategories as jest.MockedFunction<
            typeof applyCategories
        >;
        mockedUpdateCategories.mockReturnValue([clickedCategory]);
        mockedApplyCategory.mockReturnValue([]);

        render(<MainPage />);

        const categoryButton = screen.getByText(clickedCategory);
        categoryButton.click();

        expect(updateCategories).toHaveBeenCalledWith([], clickedCategory);
    });

    it('should call getNextSort function when sort button clicked', () => {
        const sortType: SortBy = 'по умолчанию';

        const mockedNextSort = getNextSortBy as jest.MockedFunction<
            typeof getNextSortBy
        >;
        mockedNextSort.mockReturnValue('по возрастанию цены');

        render(<MainPage />);

        const sortButton = screen.getByText('Сортировать ' + sortType);
        sortButton.click();

        expect(mockedNextSort).toHaveBeenCalled();
    });

    it('should call applyCategories with the correct arguments', () => {
        const selectedCategories: Category[] = ['Для дома', 'Одежда'];

        const mockedApplyCategory = applyCategories as jest.MockedFunction<
            typeof applyCategories
        >;
        mockedApplyCategory.mock;
        mockedApplyCategory.mockReturnValueOnce([
            useProducts()[1],
            useProducts()[2],
        ]);

        render(<MainPage />);

        const categoryButtonOne = screen.getByText(selectedCategories[1], {
            selector: '.categories__badge',
        });
        categoryButtonOne.click();
        const categoryButtonZero = screen.getByText(selectedCategories[0], {
            selector: '.categories__badge',
        });

        categoryButtonZero.click();

        expect(mockedApplyCategory).toHaveBeenCalledWith(useProducts(), []);
    });
});
