import { SortBy } from '../../types';
import { getNextSortBy } from '../getNextSortBy';

describe('test get next sort by function', () => {
    it('should return \'по умолчанию\'', () => {
        const sortBy: SortBy = 'по убыванию цены';
        const result: SortBy = 'по умолчанию';
        expect(getNextSortBy(sortBy)).toBe(result);
    });
    it('should return \'по возрастанию цены\'', () => {
        const sortBy: SortBy = 'по умолчанию';
        const result: SortBy = 'по возрастанию цены';
        expect(getNextSortBy(sortBy)).toBe(result);
    });
    it('should return \'по убыванию цены\'', () => {
        const sortBy: SortBy = 'по возрастанию цены';
        const result: SortBy = 'по убыванию цены';
        expect(getNextSortBy(sortBy)).toBe(result);
    });
});
