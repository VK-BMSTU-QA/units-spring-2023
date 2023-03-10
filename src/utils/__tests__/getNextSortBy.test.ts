import { getNextSortBy } from '../getNextSortBy';
import { SortBy } from '../../types';

describe('test get next sortBy function', () => {
    test.each<{ input: SortBy; expected: SortBy }>([
        {
            input: 'по умолчанию',
            expected: 'по возрастанию цены',
        },
        {
            input: 'по возрастанию цены',
            expected: 'по убыванию цены',
        },
        {
            input: 'по убыванию цены',
            expected: 'по умолчанию',
        },
    ])('should return $expected after $input', ({ input, expected }) => {
        expect(getNextSortBy(input)).toBe(expected);
    });
});
