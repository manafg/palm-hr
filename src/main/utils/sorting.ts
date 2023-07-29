import { BookInfo } from "../context/BooksContext/types";
import {option} from '../components/SearchInput/types'


function searchByOption(array: BookInfo[], filter: keyof BookInfo['volumeInfo']): option[] {
  return array.map((option) => {
    const item = option?.volumeInfo?.[filter];
    const parsedItem :any= Array.isArray(item) ? item[0] : item;
    const firstLetter = parsedItem?.charAt(0)?.toUpperCase() || 'A';

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      title: parsedItem || '',
    };
  });
}

function searchByKey(array: BookInfo[], text: string, filter: keyof BookInfo['volumeInfo']) {
  return array.filter(obj => {
    const item = obj?.volumeInfo[filter];
    const value = Array.isArray(item) ? item[0] : item;
    return typeof value === 'string' && value.includes(text);
  });
}

export {searchByKey, searchByOption };
