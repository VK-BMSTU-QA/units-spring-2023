import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '300 $'),
    };
});

afterEach(jest.clearAllMocks);

describe('ProductCard test', () => {
    let product: Product;
    beforeAll(() => {
        product = {
            id: 1,
            name: 'Easy',
            description: 'Easy test',
            price: 300,
            priceSymbol: '$',
            category: 'Для дома',
        };
    });

    it('should render correctly', () => {
        const rendered = render(<ProductCard {...product} />);

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('getPrice called once', () => {
        render(<ProductCard {...product} />);

        expect(getPrice).toBeCalledTimes(1);
    });
});
