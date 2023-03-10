import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortButton } from '../SortButton';

describe('Button render', () => {
    afterEach(jest.clearAllMocks);
    const onSortButtonClick = jest.fn();

    it('should render correctly', () => {
        const renderedButton = render(
            <SortButton
                currentSort="по умолчанию"
                onSortButtonClick={onSortButtonClick}
            />
        );

        expect(renderedButton.getByRole('button')).toHaveTextContent(
            'Сортировать по умолчанию'
        );
    });

    it('should click button once', () => {
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

    it('should contain snapshot', () => {
        const onSortButtonClick = jest.fn();
        const renderedButton = render(
            <SortButton
                currentSort="по умолчанию"
                onSortButtonClick={onSortButtonClick}
            />
        );

        expect(renderedButton.asFragment()).toMatchSnapshot();
    });
});
