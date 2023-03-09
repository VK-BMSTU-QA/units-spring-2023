import { SortBy } from '../../types';
import { getNextSortBy } from '../getNextSortBy';

describe('test getNextSortBy', () => {
    const lessVal: SortBy = 'по убыванию цены';
    const moreVal: SortBy = 'по возрастанию цены';
    const defaultVal: SortBy = 'по умолчанию';

    it('shold return default value', () => {
        expect(getNextSortBy(lessVal)).toEqual(defaultVal);
    });

    it('shiuld return less target value', () => {
        expect(getNextSortBy(moreVal)).toEqual(lessVal);
    });

    it('should return more target value', () => {
        expect(getNextSortBy(defaultVal)).toEqual(moreVal);
    });
});
