import { getNextSortBy } from '../getNextSortBy';

describe('test getNextSortBy function', () => {
    it('test "по умолчанию"', () =>
        expect(getNextSortBy('по умолчанию')).toBe('по возрастанию цены'));

    it('test "по возрастанию цены"', () =>
        expect(getNextSortBy('по возрастанию цены')).toBe('по убыванию цены'));

    it('test "по убыванию цены"', () =>
        expect(getNextSortBy('по убыванию цены')).toBe('по умолчанию'));
});
