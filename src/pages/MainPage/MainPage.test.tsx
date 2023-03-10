import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
import { Category, SortBy } from '../../types';

describe('Testing MainPage', () => {
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date('2023-03-10'));
    });

    afterAll(() =>{
        jest.useRealTimers();
    }); 

    it('Should be in the doc', () => {
        const rendered = render(<MainPage />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    describe.each<Category>([
        'Для дома',
        'Одежда',
        'Электроника'
    ])('Testing %p button', (name) => {
        it('Button should be in the doc', () => {
            const rendered = render(<MainPage />);
            const btn =  rendered.getAllByText(name).filter(elem => elem.classList.contains('categories__badge'))[0];
            expect(btn).toBeInTheDocument();
        });

        it('Button should filter products', () => {
            const rendered = render(<MainPage />);
            const btn =  rendered.getAllByText(name).filter(elem => elem.classList.contains('categories__badge'))[0];
            fireEvent.click(btn);

            const filtered = rendered.queryAllByTestId('product-card__category');
            filtered.forEach(item => {
                expect(item.innerHTML).toEqual(name);
            });
        });
    });

    it('Should be button sort', () =>{
        const rendered = render(<MainPage />);
        const btn =  rendered.getAllByRole('button').filter(item => item.classList.contains('sort-button'))[0];
        expect(btn).toBeInTheDocument();
    });

    it('Should sorting', () =>{
        const rendered = render(<MainPage />);
        const btn =  rendered.getAllByRole('button').filter(item => item.classList.contains('sort-button'))[0];
        fireEvent.click(btn);
        expect(rendered).toMatchSnapshot();
        fireEvent.click(btn);
        expect(rendered).toMatchSnapshot();
        fireEvent.click(btn);
        expect(rendered).toMatchSnapshot();
    });
   
});

