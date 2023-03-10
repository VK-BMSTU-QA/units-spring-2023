import { getNextSortBy } from '../getNextSortBy';

describe('test applyCategories function', () => {
    it('should return по возрастанию цены if sortBy по умолчанию', () => {
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены');
    });

    it('should return по убыванию цены if sortBy по возрастанию цены', () => {
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
    });

    it('should return по убыванию цены if sortBy по умолчанию', () => {
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
    });
});
