import { getNextSortBy } from '../getNextSortBy';
import type { SortBy } from '../../types';

describe('Тест функции getNextSortBy', () => {
    it.each([
        ['по умолчанию' as SortBy, 'по возрастанию цены' as SortBy],
        ['по возрастанию цены' as SortBy, 'по убыванию цены' as SortBy],
        ['по убыванию цены' as SortBy, 'по умолчанию' as SortBy]
    ])('Выбор следующего условия сортировки', (sortBy, nextSortBy) => {
        expect(getNextSortBy(sortBy)).toBe(nextSortBy);
    });
});
