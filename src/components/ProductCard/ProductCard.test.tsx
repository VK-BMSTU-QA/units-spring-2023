import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';
import { Categories } from '../Categories';
import React from 'react';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '222 $'),
    };
});

afterEach(jest.clearAllMocks);

describe('test ProductCard', () => {
    const product: Product = {
        id: 1,
        name: 'Lamp',
        description: 'Лампа',
        price: 111,
        priceSymbol: '$',
        category: 'Для дома',
        imgUrl: '../../../public/lamp.png',
    };

    it('test ProductCard render', () => {
        const renderedProduct = render(<ProductCard {...product} />);
        expect(renderedProduct.asFragment()).toMatchSnapshot();
    });

    it('test getPrice call', () => {
        render(<ProductCard {...product} />);
        expect(getPrice).toBeCalledTimes(1);
        expect(getPrice).toHaveBeenCalledTimes(1);
    });
});
