import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '25 000 $'),
    };
});

afterEach(jest.clearAllMocks);

describe('ProductCard test', () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'some product',
            description: 'some description',
            price: 25000,
            priceSymbol: '$',
            category: 'Для дома',
        },
        {
            id: 2,
            name: 'some product',
            description: 'some description',
            price: 25000,
            priceSymbol: '$',
            category: 'Для дома',
            imgUrl: './someImg.png',
        },
    ];
    let rendered: RenderResult;
    it('rendering', () => {
        rendered = render(<ProductCard {...products[0]} />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });
    it('getPrice вызвана единожды', () => {
        rendered = render(<ProductCard {...products[0]} />);
        expect(getPrice).toBeCalledTimes(1);
    });
    it('не содержит изображений', () => {
        rendered = render(<ProductCard {...products[0]} />);
        expect(rendered.queryByRole('img')).not.toBeInTheDocument();
    });
    it('содержит изображение', () => {
        rendered = render(<ProductCard {...products[1]} />);
        expect(rendered.queryByRole('img')).toBeInTheDocument();
    });
});
