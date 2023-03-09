import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';

afterEach(jest.clearAllMocks);

describe('Card render', () => {
    it('should render', () => {
        const renderedCard = render(
            <ProductCard
                id={0}
                name='electrProd'
                description='very original description'
                price={100}
                category='Электроника'
            />
        );

        expect(renderedCard.asFragment).toMatchSnapshot();
    });
});
