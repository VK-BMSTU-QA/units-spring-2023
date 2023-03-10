import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';

afterEach(jest.clearAllMocks);

describe('Product Card test', () => {
    it('should render correctly', () => {
        const rendered = render(
            <ProductCard
                name={'IPhone'}
                category={'Электроника'}
                description={'Новый телефон Iphone 15 без регистрации'}
                id={1}
                price={1337}
                priceSymbol={'$'}
            />
        );

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should insert image if imgUrl provided', () => {
        const rendered = render(
            <ProductCard
                name={'IPhone'}
                category={'Электроника'}
                description={'Новый телефон Iphone 15 без регистрации'}
                id={1}
                price={1337}
                priceSymbol={'$'}
                imgUrl={'test.jpg'}
            />
        );

        expect(rendered.getByRole('img').className).toBe('product-card__image');
    });

    it('should show price correctly', () => {
        const rendered = render(
            <ProductCard
                name={'IPhone'}
                category={'Электроника'}
                description={'Новый телефон Iphone 15 без регистрации'}
                id={1}
                price={1337}
                priceSymbol={'$'}
            />
        );

        expect(rendered.getByTestId('product-card__price').textContent).toBe(
            '1,337 $'
        );
    });
});
