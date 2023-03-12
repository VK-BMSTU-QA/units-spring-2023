import { getNextSortBy } from '../getNextSortBy';

describe('testing getNextSortBy function', () => {
    it('return defult', () => {
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены');
    });

    it('return ascending sort', () => {
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены');
    });

    it('return descending sort', () => {
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию');
    });
});
