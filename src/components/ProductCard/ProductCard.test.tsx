import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';

jest.mock('../../utils', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '111 $'),
    };
});

afterAll(jest.clearAllMocks);

describe('Testing ProductCard component', () => {
    const productMock: Product = {
        id: 321,
        name: 'product name',
        description: 'product desc',
        price: 123,
        priceSymbol: '₽',
        category: 'Для дома',
    };

    it('should render correctly', () => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should show price with symbol', () => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        expect(rendered.getByTestId('product-card__price')).toHaveTextContent('111 $');
    });


    it('should show name', () => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        expect(rendered.getByTestId('product-card__name')).toHaveTextContent(productMock.name);
    });


    it('should show desc', () => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        expect(rendered.getByTestId('product-card__description')).toHaveTextContent(productMock.description);
    });

    it('should show image if it is', () => {
        const productMockWithImage : Product=  {...productMock, imgUrl: '/example.png'};
        const rendered = render(<ProductCard key={productMock.id} {...productMockWithImage}/>);
        expect(rendered.getByTestId('product-card__image')).toBeInTheDocument();
    });

    it('should not show image if it is not', () => {
        const rendered = render(<ProductCard key={productMock.id} {...productMock} />);
        expect(rendered.queryByTestId('product-card__image')).not.toBeInTheDocument();
    });
});
