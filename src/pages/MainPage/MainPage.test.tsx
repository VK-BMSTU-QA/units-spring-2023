import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MainPage } from './MainPage';
import { Category } from '../../types';

afterEach(jest.clearAllMocks);

describe('test Main Page', () => {
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date('2000-01-01T00:00:00'));
    });

    afterAll(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should render correctly in DOM tree', () => {
        const rendered = render(<MainPage />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    test.each<{ category: Category }>([
        { category: 'Электроника' },
        { category: 'Для дома' },
        { category: 'Одежда' },
    ])(
        'click on $categoryName should filter items correctly',
        (categoryName) => {
            const rendered = render(<MainPage />);
            const categoryBtn = rendered
                .getAllByText(categoryName.category)
                .find(
                    (obj) => (obj.className = 'categories__badge')
                ) as HTMLElement;
            expect(categoryBtn).toBeTruthy();
            fireEvent.click(categoryBtn);

            const items = rendered.queryAllByTestId('product-card__category');
            items.forEach((item) => {
                expect(item.textContent).toBe(categoryName.category);
            });
        }
    );

    it('click on sort btn should sort items correctly', () => {
        const rendered = render(<MainPage />);
        const sortBtn = rendered.getByTestId('sort-button');
        fireEvent.click(sortBtn);
        expect(rendered.asFragment()).toMatchSnapshot();
        fireEvent.click(sortBtn);
        expect(rendered.asFragment()).toMatchSnapshot();
        fireEvent.click(sortBtn);
        expect(rendered.asFragment()).toMatchSnapshot();
    });
});
