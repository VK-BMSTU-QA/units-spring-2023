import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/Product';

afterEach(jest.clearAllMocks);

const testProduct: Product  = 
    {
        id: 1,
        name: 'IPhone 14 Pro',
        description: 'Latest iphone, buy it now',
        price: 999,
        priceSymbol: '$',
        category: 'Электроника',
        imgUrl: '/iphone.png',
    }

describe('ProductCard', () => {
    test('render', () => {
        const renderedCard = render(
            <ProductCard key={testProduct.id} {...testProduct} />
        );
        expect(renderedCard.asFragment()).toMatchSnapshot();
    });
});
