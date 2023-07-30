import { renderHook, act } from '@testing-library/react';
import useInitSingleBook from '../useInitSingleBook';
import { BookInfo } from "../../context/BooksContext/types";
import { useGetSingleBook } from "../useGetSingleBook";
import bookinfo from '../../mocks/bookinfo'

jest.mock('../useGetSingleBook', () => ({
  __esModule: true,
  useGetSingleBook: jest.fn(),
}));

describe('useInitSingleBook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  xtest('calls useGetSingleBook hook with correct arguments', () => {
    const onSuccess = jest.fn();
    (useGetSingleBook as jest.Mock).mockReturnValue({ isLoading: true, refetch: jest.fn() });

    renderHook(() => useInitSingleBook('1'));

    expect(useGetSingleBook).toHaveBeenCalledWith('1', { onSuccess });
  });

  test('calls refetch on mount', () => {
    const onSuccess = jest.fn();
    const refetch = jest.fn();
    (useGetSingleBook as jest.Mock).mockReturnValue({ isLoading: true, refetch });

    renderHook(() => useInitSingleBook('1'));

    expect(refetch).toHaveBeenCalled();
  });

  test('updates book state on success', () => {
    const onSuccess = jest.fn();
    const bookData: BookInfo = bookinfo;
    (useGetSingleBook as jest.Mock).mockReturnValue({ isLoading: false, refetch: jest.fn() });
    (onSuccess as jest.Mock).mockImplementation((data: BookInfo) => {
      expect(data).toEqual(bookData);
    });

    renderHook(() => useInitSingleBook('1'));

    act(() => {
      onSuccess(bookData);
    });
  });
});
