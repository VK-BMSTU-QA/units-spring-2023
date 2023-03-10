import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';
jest.mock('../../utils');

afterEach(jest.clearAllMocks);
describe('ProductCard test', () => {
    it.each([
        [{
            id: 2, 
            name: 'Костюм гуся',
            description: 'Запускаем гуся, работяги',
            price: 1000,
            priceSymbol: '₽',
            category: 'Одежда',
            imgUrl: '/lamp.png',
        } as Product],
        [{
            id: 2, 
            name: 'Костюм гуся',
            description: 'Запускаем гуся, работяги',
            price: 1000,
            priceSymbol: '₽',
            category: 'Одежда',
        } as Product],
    ])('should render correctly', (productMock) => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('test getPrice called', () => {
        const productMock: Product = {
            id: 2, 
            name: 'Костюм гуся',
            description: 'Запускаем гуся, работяги',
            price: 1000,
            priceSymbol: '₽',
            category: 'Одежда',
            imgUrl: '/lamp.png',
        }

        render(<ProductCard key={productMock.id} {...productMock} />);
        
        expect(getPrice).toHaveBeenCalled();
    });
});
