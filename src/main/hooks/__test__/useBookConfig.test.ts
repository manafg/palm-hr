// @ts-ignore
import { renderHook, act } from '@testing-library/react';
import { BooksInfoContext, BookInfo } from '../../context/BooksContext/types';
import useBookConfig  from '../useBookConfig';
import bookinfo from '../../mocks/bookinfo'
import React from 'react'
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

jest.mock('immer', () => ({
  produce: jest.fn(),
}));

jest.mock('../../utils/sorting', () => ({
  searchByKey: jest.fn(),
}));

describe('useBookConfig', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns the correct initial state', () => {
    const initialState: BookInfo[] = [];
    const setState = jest.fn();
    (React.useContext as jest.Mock).mockReturnValue([initialState, setState] as BooksInfoContext);

    const { result } = renderHook(() => useBookConfig());

    expect(result.current.state).toBe(initialState);
    expect(result.current.setState).toBe(setState);
  });

  test('calls setState with correct parsedBooks when saveBooksMap is called', () => {
    const parsedBooks: BookInfo[] = [bookinfo];
    const setState = jest.fn();
    (React.useContext as jest.Mock).mockReturnValue([[], setState] as BooksInfoContext);

    const { result } = renderHook(() => useBookConfig());
    act(() => {
      result.current.saveBooksMap(parsedBooks);
    });

    expect(setState).toHaveBeenCalledWith(parsedBooks);
  });

  test('calls searchByKey with correct arguments and sets state correctly in searchByTitleCallBack', () => {
    const initialState: BookInfo[] = [bookinfo];
    const sortedBooks: BookInfo[] = [bookinfo];
    const setState = jest.fn();
    (React.useContext as jest.Mock).mockReturnValue([initialState, setState] as BooksInfoContext);
    (require('immer').produce as jest.Mock).mockImplementation((state, callback) => {
      callback(state);
      return sortedBooks;
    });
    (require('../../utils/sorting').searchByKey as jest.Mock).mockReturnValue(sortedBooks);

    const { result } = renderHook(() => useBookConfig());
    act(() => {
      result.current.searchByTitleCallBack('Book 2');
    });

    expect(require('../../utils/sorting').searchByKey).toHaveBeenCalledWith(initialState, 'Book 2', 'title');
    expect(setState).toHaveBeenCalledWith(sortedBooks);
  });


});
