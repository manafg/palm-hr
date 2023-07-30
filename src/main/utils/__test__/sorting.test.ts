import { searchByOption, searchByKey } from '../sorting';
import { BookInfo } from "../../context/BooksContext/types";
import { option } from '../../components/SearchInput/types';
import bookinfo from '../../mocks/bookinfo'

const bookArray: any[] = [
  {
    id: '1',
    volumeInfo: {
      title: 'Book 1',
      authors: ['Author 1'],
      publisher: 'Publisher 1',
    },
  },
  {
    id: '2',
    volumeInfo: {
      title: 'Book 2',
      authors: ['Author 2'],
      publisher: 'Publisher 2',
    },
  },
  {
    id: '3',
    volumeInfo: {
      title: 'Book 3',
      authors: ['Author 3'],
      publisher: 'Publisher 3',
    },
  },
];

describe('searchByOption', () => {
  test('returns an array of options with correct firstLetter and title for the given filter', () => {
    const filter = 'title';
    const options: option[] = searchByOption(bookArray, filter);

    expect(options).toHaveLength(3);
    expect(options).toEqual([
      { firstLetter: 'B', title: 'Book 1' },
      { firstLetter: 'B', title: 'Book 2' },
      { firstLetter: 'B', title: 'Book 3' },
    ]);
  });

});

describe('searchByKey', () => {
  test('returns an array of books that match the given text for the specified filter', () => {
    const filter = 'title';
    const text = 'Book 1';
    const filteredBooks: BookInfo[] = searchByKey(bookArray, text, filter);

    expect(filteredBooks).toHaveLength(1);
    expect(filteredBooks[0].id).toBe('1');
  });

});
