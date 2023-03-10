import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';
jest.mock('../../utils');

const defaultProduct: Product = {
    id: 2, 
    name: 'Костюм гуся',
    description: 'Запускаем гуся, работяги',
    price: 1000,
    priceSymbol: '₽',
    category: 'Одежда',
};

afterEach(jest.clearAllMocks);
describe('ProductCard test', () => {
    it.each([
        [{
            ...defaultProduct,
            imgUrl: '/lamp.png',
        }],
        [{...defaultProduct}],
    ])('should render correctly', (productMock) => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('test getPrice called', () => {
        render(<ProductCard key={defaultProduct.id} {...defaultProduct} />);
        
        expect(getPrice).toHaveBeenCalled();
    });
});
