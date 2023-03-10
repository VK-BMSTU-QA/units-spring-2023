import { getNextSortBy } from '../getNextSortBy';

describe('test get next sort by function', () => {
    it('should return "по убыванию цены"', () => {
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
    });
    it('should return "по возрастанию цены"', () => {
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены');
    });
    it('should return "по умолчанию"', () => {
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
    });
});
