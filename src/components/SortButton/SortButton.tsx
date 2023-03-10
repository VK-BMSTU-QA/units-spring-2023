import React, { FC } from 'react';

import type { SortBy } from '../../types';

import './SortButton.css';

type SortButtonProps = {
    currentSort: SortBy;
    onSortButtonClick: () => void;
};

export const SortButton: FC<SortButtonProps> = ({
    onSortButtonClick,
    currentSort,
}) => {
    return (
        <button className="sort-button" data-testid="sort-button" onClick={onSortButtonClick}>
            Сортировать {currentSort}
        </button>
    );
};
