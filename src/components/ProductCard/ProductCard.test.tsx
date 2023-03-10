import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { getPrice } from '../../utils';

jest.mock('../../utils/getPrice', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '15 000 ₽'),
    };
});

afterEach(jest.clearAllMocks);

describe('Categories test', () => {
    let product: Product = {
        id: 1,
        name: 'Samsung',
        description: 'Смартфон',
        price: 15000,
        priceSymbol: '₽',
        category: 'Для дома',
    };

    it('should render correctly', () => {
        const rendered = render(<ProductCard {...product} />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('getPrice called once', () => {
        render(<ProductCard {...product} />);
        expect(getPrice).toBeCalledTimes(1);
    });
});
