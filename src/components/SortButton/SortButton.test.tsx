import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortButton } from './SortButton';

afterEach(jest.clearAllMocks);

const onSortButtonClick = jest.fn();

describe('Button render', () => {
    it('render', () => {
        const renderedButton = render(
            <SortButton
                currentSort="по умолчанию"
                onSortButtonClick={onSortButtonClick}
            />
        );
        expect(renderedButton.asFragment()).toMatchSnapshot();
    });
    it('check button text', () => {
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
    it('func called once', () => {
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
