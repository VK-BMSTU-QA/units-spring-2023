import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
jest.mock('../../utils/getPrice');
jest.useFakeTimers();

afterEach(jest.clearAllMocks);
describe('MainPage test', () => {
    it('test render page without currentTime', () => {
        const rendered = render(<MainPage/>);
        
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    describe.each([
        'Для дома',
        'Одежда',
        'Электроника'
    ])('test categories', (category) => {
        it('should render in page', () => {
            const rendered = render(<MainPage/>);
            const rendered_category = rendered.getAllByText(category).filter(item => item.classList.contains('categories__badge'))[0];
            
            expect(rendered_category).toBeInTheDocument();
        });

        it('should filter by categories', () => {
            const rendered = render(<MainPage/>);
            const rendered_category = rendered.getAllByText(category).filter(item => item.classList.contains('categories__badge'))[0];
            fireEvent.click(rendered_category);

            expect(rendered).toMatchSnapshot();
        });
    });

    it('sort button should render in page', () => {
        const rendered = render(<MainPage/>);
        const sort_button = rendered.baseElement.querySelector('.sort-button');
        
        expect(sort_button).not.toBe(null);
    });

    it('test sorting', () => {
        const rendered = render(<MainPage/>);
        const sort_button = rendered.getAllByRole('button').filter(item => item.classList.contains('sort-button'))[0];
        
        fireEvent.click(sort_button);
        expect(rendered).toMatchSnapshot();
    });
});
