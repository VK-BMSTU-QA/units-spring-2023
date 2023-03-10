import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
jest.mock('../../hooks/useCurrentTime');
jest.mock('../../utils/getPrice');

afterEach(jest.clearAllMocks);
describe('MainPage render', () => {
    it('should render correctly', () => {
        const rendered = render(<MainPage />);

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('Should sort after button click', () => {
        const rendered = render(<MainPage />);
        const sortButton = rendered.getByTestId('sort-button');
        fireEvent.click(sortButton);
        expect(rendered).toMatchSnapshot();
    });

    const categories = ['Электроника', 'Для дома', 'Одежда'];
    test.each(categories)('should filter by %category category', (category) => {
        const rendered = render(<MainPage />);
        const rendered_category = rendered
            .getAllByText(category)
            .filter((item) => item.classList.contains('categories__badge'))[0];
        fireEvent.click(rendered_category);

        expect(rendered).toMatchSnapshot();
    });
});
