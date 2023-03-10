import { getNextSortBy } from '../getNextSortBy';
import type { Category, SortBy } from '../../types';

describe('test get Next Sort By function', () => {
    test('should return Next Sort By type default', () => {
        const teststr: SortBy = 'по умолчанию'
        expect(getNextSortBy(teststr)).toBe('по возрастанию цены');
    });

    test('should return Next Sort By type price asc', () => {
        const teststr: SortBy = 'по возрастанию цены'
        expect(getNextSortBy(teststr)).toBe('по убыванию цены');
    });

    test('should return Next Sort By type price desc', () => {
        const teststr: SortBy = 'по убыванию цены'
        expect(getNextSortBy(teststr)).toBe('по умолчанию');
    });
});
