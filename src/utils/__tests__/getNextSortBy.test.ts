import { getNextSortBy } from '../getNextSortBy';

describe('test get next sort by function', () => {
    it('should return ascending sort after default', () => {
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены');
    });

    it('should return descending sort after ascending sort', () => {
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
    });

    it('should return default sort after descending sort', () => {
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
    });
});
