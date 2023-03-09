import { Product, SortBy, PriceSymbol } from '../../types';
import { getProductRUBPrice ,productComparator } from '../productComparator'

describe('Проверка getProductRUBPrice', () =>{
    test.each<{sym: PriceSymbol, val: number, expected: number}>([
        {sym: '₽', val: 123, expected: 123},
        {sym: '$', val: 1, expected: 70},
    ])('Проверяем перевод $val $symb. Ожидаем: $expected (руб.)', ({sym, val, expected})=>{
        const prod : Product = {
            id: 1,
            name: 'first',
            priceSymbol: sym,
            price: val,
            description :' desc',
            category: 'Для дома'
        }
        expect(getProductRUBPrice(prod)).toBe(expected);
    });

});

describe('Проверка productComparator', () => {
    const pr1Rub: Product = {
        id: 1,
        name: '1 rub',
        description: '1 rub mock',
        price: 1,
        priceSymbol: '₽',
        category: 'Для дома',
    };

    const pr100Rub: Product = {
        id: 2,
        name: '100 rub',
        description: '100 rub mock',
        price: 100,
        priceSymbol: '₽',
        category: 'Для дома',
    };

    const pr70Rub: Product = {
        id: 3,
        name: '70 rub',
        description: '70 rub mock',
        price: 70,
        priceSymbol: '₽',
        category: 'Для дома',
    };


    const pr1Dol: Product = {
        id: 4,
        name: '1 doll',
        description: '1 doll mock',
        price: 1,
        priceSymbol: '$',
        category: 'Для дома',
    };
    const pr100Dol: Product = {
        id: 5,
        name: '100 doll',
        description: '100 doll mock',
        price: 100,
        priceSymbol: '$',
        category: 'Для дома',
    };

    test.each<{ srtBy: SortBy, lhs: Product, rhs: Product, expected: number }>([
        // По возрастанию одна валюта
        { srtBy: 'по возрастанию цены', lhs: pr1Rub, rhs: pr100Rub, expected: -1 },
        { srtBy: 'по возрастанию цены', lhs: pr100Rub, rhs: pr1Rub, expected: 1 },
        { srtBy: 'по возрастанию цены', lhs: pr1Rub, rhs: pr1Rub, expected: 0 },

        // По возрастанию разная валюта
        { srtBy: 'по возрастанию цены', lhs: pr1Rub, rhs: pr1Dol, expected: -1 },
        { srtBy: 'по возрастанию цены', lhs: pr100Dol, rhs: pr100Rub, expected: 1 },
        { srtBy: 'по возрастанию цены', lhs: pr1Dol, rhs: pr70Rub, expected: 0 },

        // По убыванию одна валюта
        { srtBy: 'по убыванию цены', lhs: pr1Rub, rhs: pr100Rub, expected: 1 },
        { srtBy: 'по убыванию цены', lhs: pr100Rub, rhs: pr1Rub, expected: -1 },
        { srtBy: 'по убыванию цены', lhs: pr1Rub, rhs: pr1Rub, expected: 0 },
        
        // По убыванию разная валюта
        { srtBy:  'по убыванию цены', lhs: pr1Rub, rhs: pr1Dol, expected: 1 },
        { srtBy:  'по убыванию цены', lhs: pr100Dol, rhs: pr100Rub, expected: -1 },
        { srtBy:  'по убыванию цены', lhs: pr1Dol, rhs: pr70Rub, expected: 0 },

        // По умолчанию одна валюта
        { srtBy: 'по умолчанию', lhs: pr1Rub, rhs: pr100Rub, expected: 0 },
        { srtBy: 'по умолчанию', lhs: pr100Rub, rhs: pr1Rub, expected: 0 },
        { srtBy: 'по умолчанию', lhs: pr1Rub, rhs: pr1Rub, expected: 0 },

        // По умолчанию разная валюта
        { srtBy: 'по умолчанию', lhs: pr1Rub, rhs: pr1Dol, expected: 0 },
        { srtBy: 'по умолчанию', lhs: pr100Dol, rhs: pr100Rub, expected: 0 },
        { srtBy: 'по умолчанию', lhs: pr1Dol, rhs: pr70Rub, expected: 0 },
    ])('Проверяем тип сортировки: $srtBy, lhs: $lhs.price $lhs.priceSymbol, rhs: $rhs.price $rhs.priceSymbol, extected: $expected', ({srtBy, lhs, rhs, expected}) => {
        expect(productComparator(srtBy)(lhs, rhs)).toBe(expected);
    });

});