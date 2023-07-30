import { renderHook, act } from '@testing-library/react';
import useBookConfig  from '../useBookConfig';
import { useGetBooks } from '../useGetBook';
import useBooksContextInit from '../useInitBooks';
import { BookInfo } from '../../context/BooksContext/types';
import bookinfo from '../../mocks/bookinfo'

jest.mock('../useBookConfig', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../useGetBook', () => ({
  __esModule: true,
  default: jest.fn(),
}));

xdescribe('useBooksContextInit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls useBookConfig and useGetBooks hooks with correct arguments', () => {
    const saveBooksMap = jest.fn();
    const useBookConfigMock = useBookConfig as jest.Mock;
    (useBookConfig as jest.Mock).mockReturnValue({ saveBooksMap });

    const onSuccess = jest.fn();
    const useGetBooksMock = useGetBooks as jest.Mock;
    (useGetBooks as jest.Mock).mockReturnValue({ isLoading: true, refetch: jest.fn() });

    renderHook(() => useBooksContextInit());

    expect(useBookConfigMock).toHaveBeenCalled();
    expect(useGetBooksMock).toHaveBeenCalledWith({ onSuccess });
  });

  test('calls saveBooksMap with correct data when onSuccess is called', () => {
    const saveBooksMap = jest.fn();
    const useBookConfigMock = useBookConfig as jest.Mock;
    useBookConfigMock.mockReturnValue({ saveBooksMap });

    const onSuccess = jest.fn();
    const books: BookInfo[] = [bookinfo];
    onSuccess(books);

    expect(saveBooksMap).toHaveBeenCalledWith(books);
  });
});
