import { getNextSortBy } from '../getNextSortBy';
import { SortBy } from '../../types';

describe('Проверка getNextSortBy', () => {
    test.each<{ type: SortBy, expecting: SortBy }>([
        { type: 'по возрастанию цены', expecting: 'по убыванию цены' },
        { type: 'по убыванию цены', expecting: 'по умолчанию' },
        { type: 'по умолчанию', expecting: 'по возрастанию цены' }
    ])('Проверка типа сортировки: %p', ({ type, expecting }) => {
        expect(getNextSortBy(type)).toEqual(expecting);
    });
});
