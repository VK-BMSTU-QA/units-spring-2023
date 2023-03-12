import { getNextSortBy } from '../getNextSortBy';

describe('test applyCategories function', () => {
    it('по умолчанию', () => {
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены');
    });

    it('по возрастанию цены', () => {
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
    });

    it('по убыванию цены', () => {
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
    });
});
