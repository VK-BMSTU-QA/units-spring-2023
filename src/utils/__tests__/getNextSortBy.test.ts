import { getNextSortBy } from '../getNextSortBy';

describe('test get next sort by function', () => {
    it('should return next sort by', () => {
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены');
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
    });
});
