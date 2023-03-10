import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  applyCategories,
  getNextSortBy
} from "../../utils";
import { MainPage } from './MainPage';
import { Category, PriceSymbol, Product } from "../../types";

const products = [{
  id: 1,
  name: 'Приора',
  description: 'Ауф для души',
  price: 10000000,
  priceSymbol: '₽',
  category: 'car',
},
  {
    id: 6,
    name: 'Ryzen 2700',
    description: 'the best of the best processor',
    price: 400,
    priceSymbol: '$',
    category: 'Электроника',
    imgUrl: '/proc.png',
  },
  {
    id: 3,
    name: 'Принтер',
    description: 'Незаменимая вещь для студента',
    price: 7000,
    category: 'Электроника',
  }];

afterEach(jest.clearAllMocks);

jest
  .useFakeTimers()
  .setSystemTime(new Date(2011, 0, 1, 3, 0, 0, 0));

jest.mock('../../hooks/useProducts', () => {
  return {
    __esModule: true,
    useProducts: jest.fn(() => products),
  };
});

jest.mock('../../utils/getNextSortBy', () => {
  return {
    __esModule: true,
    getNextSortBy: jest.fn(() => 'по возрастанию цены'),
  };
});

jest.mock('../../utils/applyCategories', () => {
  return {
    __esModule: true,
    applyCategories: jest.fn((
      products: Product[],
      categories: Category[]
    ): Product[] => {
      if (!categories.length) return products;

      return products.filter((product) => categories.includes(product.category));
    }),
  };
});

jest.mock('../../utils/getPrice', () => {
  return {
    __esModule: true,
    getPrice: jest.fn((value: number, symbol: PriceSymbol = '₽'): string =>
      `${value.toLocaleString('ru-RU')} ${symbol}`
    ),
  };
});

describe('test mainPage', () => {
  it('should render correctly', () => {
    const rendered = render(
      <MainPage />
    );
    expect(rendered.asFragment()).toMatchSnapshot();
  });

  it('must be called applyCategories once', () => {
    const rendered = render(
      <MainPage />
    );

    expect(applyCategories).toHaveBeenCalledTimes(1);
  });

  it('must be called select once', () => {
    const rendered = render(
        <MainPage />
    );

    expect(getNextSortBy).toHaveBeenCalledTimes(0);
    fireEvent.click(rendered.getByText('Сортировать по умолчанию'));
    expect(getNextSortBy).toHaveBeenCalledTimes(1);
  });
});
