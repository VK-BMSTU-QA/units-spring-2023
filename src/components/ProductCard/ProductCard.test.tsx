import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { getPrice } from '../../utils/getPrice';

import { Product } from '../../types';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '100 $'),
    };
});

afterEach(jest.clearAllMocks);

const product: Product = {
    id: 1,
    name: "карта",
    description: "asdasd",
    category: 'Для дома',
    price: 100,
    imgUrl: "asd",
    priceSymbol: '$'
}

describe('ProductCard render', () => {
    it('should render correctly', () => {
        const rendered = render(
            <ProductCard {...product}/>
        );

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('getPrice once', () => {
        render(
            <ProductCard {...product}/>
        );

        expect(getPrice).toBeCalledTimes(1);
    });
});
