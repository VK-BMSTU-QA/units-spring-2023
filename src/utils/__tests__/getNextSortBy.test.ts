import { SortBy } from '../../types';
import { getNextSortBy } from '../getNextSortBy';

describe('test getNextSortBy', () => {
    const lessVal: SortBy = 'по убыванию цены';
    const moreVal: SortBy = 'по возрастанию цены';
    const defaultVal: SortBy = 'по умолчанию';

    test.each<{
        inputSort: SortBy;
        expected: SortBy;
    }>([
        {
            inputSort: lessVal,
            expected: defaultVal,
        },
        {
            inputSort: moreVal,
            expected: lessVal,
        },
        {
            inputSort: defaultVal,
            expected: moreVal,
        },
    ])(
        'should return needed sort value depened on input',
        ({ inputSort, expected }) => {
            expect(getNextSortBy(inputSort)).toEqual(expected);
        }
    );
});
