import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from '../../components/ProductCard';
import { SortButton } from '../../components/SortButton';
import { Categories } from '../../components/Categories';
import { Product } from '../../types/Product';
import { MainPage } from './MainPage';

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

describe('Main page', () => {
    test('render', () => {
        const onSortButtonClick = jest.fn();
        // const renderedButton = render(
        //     <SortButton
        //         currentSort="по умолчанию"
        //         onSortButtonClick={onSortButtonClick}
        //     />
        // );
        // const renderedProductCard = render(
        //     <ProductCard key={testProduct.id} {...testProduct} />
        // );

        // const renderedCategories = render(<Categories selectedCategories={[]} />);
        // const currentTime: string = "20:20:20"

        // const renderedPage = render(
        //     <div className="main-page">
        //     <h2 className="main-page__title">VK Маркет</h2>
        //     <h3>{currentTime}</h3>
        //     <div className="main-page__parameters">
        //     <Categories selectedCategories={[]} />
        //         <SortButton
        //            currentSort="по умолчанию"
        //            onSortButtonClick={onSortButtonClick}
        //         />
        //     </div>
        //     <ProductCard key={testProduct.id} {...testProduct} />
        // </div>
        // );
        //used Fake Timers for mock timer
        const renderedPage = render(<MainPage/>)
        expect(renderedPage.asFragment()).toMatchSnapshot();
    });
});
