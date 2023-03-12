import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '100 000 $'),
    };
});

afterEach(jest.clearAllMocks);

describe('testing ProductCard component', () => {
    const product: Product = {
        id: 1,
        name: 'product 1',
        description: 'description 1',
        price: 100000,
        priceSymbol: '$',
        category: 'Для дома',
    };

    it('rendering', () => {
        const rendered = render(<ProductCard {...product} />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('getPrice is only called once', () => {
        render(<ProductCard {...product} />);
        expect(getPrice).toBeCalledTimes(1);
    });

    it('containing image', () => {
        const rendered = render(<ProductCard {...product} />);
        expect(rendered.queryByRole('img')).not.toBeInTheDocument();
    });
});
