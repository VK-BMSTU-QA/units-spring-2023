import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortButton } from './SortButton';

afterEach(jest.clearAllMocks);

describe('Button render', () => {
    it('render', () => {
        const onSortButtonClick = jest.fn();
        const renderedButton = render(
            <SortButton
                currentSort="по умолчанию"
                onSortButtonClick={onSortButtonClick}
            />
        );
        expect(renderedButton.getByRole('button')).toHaveTextContent(
            'Сортировать по умолчанию'
        );
        expect(renderedButton.asFragment()).toMatchSnapshot();
    });
    it('func called once', () => {
        const onSortButtonClick = jest.fn();
        const renderedButton = render(
            <SortButton
                currentSort="по умолчанию"
                onSortButtonClick={onSortButtonClick}
            />
        );

        expect(onSortButtonClick).toHaveBeenCalledTimes(0);
        fireEvent.click(renderedButton.getByRole('button'));
        expect(onSortButtonClick).toHaveBeenCalledTimes(1);
    });
});
