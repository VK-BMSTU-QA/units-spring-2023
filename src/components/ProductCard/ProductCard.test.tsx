import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
jest.mock('../../utils/getPrice');

afterEach(jest.clearAllMocks);
describe('Product Card test', () => {
    const testProduct: Product = {
        id: 1,
        name: 'test',
        category: 'Одежда',
        description: 'test',
        price: 100,
        priceSymbol: '₽',
    };

    it('should render correctly', () => {
        const rendered = render(
            <ProductCard key={testProduct.id} {...testProduct} />
        );
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should render image', () => {
        const rendered = render(
            <ProductCard key={testProduct.id} imgUrl={'test'} {...testProduct} />
        );

        expect(rendered.getByTestId('product-card__image')).toBeInTheDocument();
    });

    it('should not render image', () => {
        const rendered = render(
            <ProductCard key={testProduct.id} {...testProduct} />
        );
        expect(
            rendered.queryByTestId('product-card__image')
        ).not.toBeInTheDocument();
    });
});
