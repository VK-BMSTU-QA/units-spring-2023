import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';

import getPrice from '../../utils/getPrice';
jest.mock('../../utils/getPrice');

const mockGetPrice = getPrice as jest.Mock;
    
afterEach(jest.clearAllMocks);

describe('product card test', () => {
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

        expect(renderedCard.asFragment()).toMatchSnapshot();
    });

    it('should call get price function', () => {
        expect(mockGetPrice).not.toBeCalled();
        const renderedCard = render(
            <ProductCard
                id={0}
                name='electrProd'
                description='very original description'
                price={100}
                category='Электроника'
            />
        );
        expect(mockGetPrice).toBeCalledTimes(1);
    });
});

describe('product card image test', () => {
    it('should not add image', () => {
        const renderedCard = render(
            <ProductCard
                id={0}
                name='electrProd'
                description='very original description'
                price={100}
                category='Электроника'
            />
        );
        const image = renderedCard.baseElement.querySelector('img')
        expect(image).toBe(null);
    });

    it('should add image', () => {
        const renderedCard = render(
            <ProductCard
                id={0}
                name='electrProd'
                description='very original description'
                price={100}
                category='Электроника'
                imgUrl='url'
            />
        );
        const image = renderedCard.baseElement.querySelector('img')
        expect(image).not.toBe(null);
    });
});
