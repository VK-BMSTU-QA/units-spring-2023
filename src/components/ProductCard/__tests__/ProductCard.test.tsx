import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { getPrice } from '../../../utils';

jest.mock('../../../utils', () => {
    return {
        __esModule: true,
        getPrice: jest.fn(() => '10 ₽'),
    };
});

describe('test product card', () => {
    afterEach(jest.clearAllMocks);

    it('should render correctly', () => {
        const renderCard = render(
            <ProductCard
                category="Для дома"
                description="Настоящая китайская швабра"
                id={1}
                name="Швабра"
                price={100}
                imgUrl="/img.jpg"
            />
        );
        expect(renderCard.asFragment()).toMatchSnapshot();
    });

    it('should call getPrice once', () => {
        expect(getPrice).toHaveBeenCalledTimes(0);
        render(
            <ProductCard
                category="Для дома"
                description="Настоящая китайская швабра"
                id={1}
                name="Швабра"
                price={100}
                imgUrl="/img.jpg"
            />
        );
        expect(getPrice).toHaveBeenCalledTimes(1);
    });

    it('should conatain an image', () => {
        const renderCard = render(
            <ProductCard
                category="Для дома"
                description="Настоящая китайская швабра"
                id={1}
                name="Швабра"
                price={100}
                imgUrl="/img.jpg"
            />
        );
        expect(renderCard.getByRole('img')).toBeInTheDocument();
    });

    it('should not conatain an image', () => {
        const renderCard = render(
            <ProductCard
                category="Для дома"
                description="Настоящая китайская швабра"
                id={1}
                name="Швабра"
                price={100}
            />
        );
        expect(renderCard.queryByRole('img')).not.toBeInTheDocument();
    });
});
