import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils/getPrice';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '1,000 ₽'),
    };
});

describe('test ProductCard function', () => {
    afterEach(jest.clearAllMocks);

    it('renders correctly', () => {
        const product: Product = {
            id: 123,
            name: 'Product Name',
            description: 'Product Description',
            price: 1000,
            priceSymbol: '₽',
            category: 'Для дома',
            imgUrl: 'http://example.com/image.png',
        };

        const { asFragment } = render(<ProductCard {...product} />);

        expect(asFragment()).toMatchSnapshot();
        expect(getPrice).toHaveBeenCalledWith(
            product.price,
            product.priceSymbol
        );
    });

    it('renders without image', () => {
        const product: Product = {
            id: 12,
            name: 'Product Name',
            description: 'Product Description',
            price: 1000,
            priceSymbol: '₽',
            category: 'Одежда',
        };

        const { queryByAltText } = render(<ProductCard {...product} />);

        expect(queryByAltText(product.name)).not.toBeInTheDocument();
        expect(getPrice).toHaveBeenCalledWith(
            product.price,
            product.priceSymbol
        );
    });

    it('renders without price symbol', () => {
        const product: Product = {
            id: 34,
            name: 'Product Name',
            description: 'Product Description',
            price: 1000,
            category: 'Электроника',
            imgUrl: 'http://example.com/image.png',
        };

        const { getByText } = render(<ProductCard {...product} />);

        expect(getPrice).toHaveBeenCalledWith(product.price, undefined);
        expect(getByText('1,000 ₽')).toBeInTheDocument();
    });
});
