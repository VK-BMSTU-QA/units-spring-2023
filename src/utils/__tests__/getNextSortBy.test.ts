import { SortBy } from '../../types';
import { getNextSortBy } from '../getNextSortBy';

describe('test get next sort by function', () => {
    it.each<[SortBy, string]>([
        ['по возрастанию цены', 'по убыванию цены'],
        ['по умолчанию', 'по возрастанию цены'],
        ['по убыванию цены', 'по умолчанию'],
    ])('should return next state', (sortName, expected) => {
        expect(getNextSortBy(sortName)).toBe(expected);
    });
});
