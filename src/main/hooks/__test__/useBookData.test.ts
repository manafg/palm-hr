// @ts-ignore
import { renderHook, act } from '@testing-library/react';
import { useContext } from 'react';
import useBookData from '../useBookData';
import { BooksInfoStateContext } from '../../context/BooksContext/BooksContext';
import { BookInfo } from '../../context/BooksContext/types';
import { searchByOption } from '../../utils/sorting';
import bookinfo from '../../mocks/bookinfo'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('../../utils/sorting', () => ({
  searchByOption: jest.fn(),
}));

describe('useBookData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns the correct initial state', () => {
    const initialState: BookInfo[] = [];
    const setState = jest.fn();
    (useContext as jest.Mock).mockReturnValue([initialState, setState] as BooksInfoStateContext);

    const { result } = renderHook(() => useBookData());

    expect(result.current.books).toBe(initialState);
    expect(result.current.filters).toBe('title');
    expect(typeof result.current.setFilters).toBe('function');
  });

  test('calls searchByOption with correct arguments when filters change', () => {
    const books: BookInfo[] = [bookinfo];
    const setFilters = jest.fn();
    (useContext as jest.Mock).mockReturnValue([books, jest.fn()] as BooksInfoStateContext);
    (require('../../utils/sorting').searchByOption as jest.Mock).mockReturnValue([]);

    const { result, rerender } = renderHook(() => useBookData());
    act(() => {
      result.current.setFilters('authors');
    });

    expect(require('../../utils/sorting').searchByOption).toHaveBeenCalledWith(books, 'authors');
  });
});
