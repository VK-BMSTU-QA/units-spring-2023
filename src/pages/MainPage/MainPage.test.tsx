import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';

import { getNextSortBy } from '../../utils/getNextSortBy';
jest.mock('../../utils/getNextSortBy');
const mockGetNextSortBy = getNextSortBy as jest.Mock;

import { updateCategories } from '../../utils/updateCategories';
import { Category } from '../../types';
jest.mock('../../utils/updateCategories');
const mockUpdateCategories = updateCategories as jest.Mock;

jest.useFakeTimers().setSystemTime(new Date('2020-01-01 0:0:0'));

afterEach(jest.clearAllMocks);

describe('Main page test', () => {
    it('should render', () => {
        const rendered = render(<MainPage />);

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should click sort by', async () => {
        const renderedPage = render(
            <MainPage
            />
        );

        const sortByButton = await renderedPage.baseElement.querySelector(".sort-button");

        expect(mockGetNextSortBy).toHaveBeenCalledTimes(0);
        if (sortByButton !== null) fireEvent.click(sortByButton);
        expect(mockGetNextSortBy).toHaveBeenCalledTimes(1);
    });

    it('should click categories', async () => {
        const category: Category = 'Для дома';
        mockUpdateCategories.mockReturnValue(category);
        
        const renderedPage = render(
            <MainPage
            />
        );

        const categoryButton = await renderedPage.baseElement.querySelectorAll(".categories__badge")[0];

        expect(mockUpdateCategories).toHaveBeenCalledTimes(0);
        if (categoryButton !== null) fireEvent.click(categoryButton);
        expect(mockUpdateCategories).toHaveBeenCalledTimes(1);
    });
});
