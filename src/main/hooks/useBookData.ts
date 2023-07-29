// hooks/useBooksData.ts
import { useContext, useState, useEffect } from "react";
import { BooksInfoStateContext } from '../context/BooksContext/BooksContext';
import { searchByOption } from '../utils/sorting';
import { BookInfo } from '../context/BooksContext/types';
import {option} from '../components/SearchInput/types'
type UseBooksDataResult = {
  books: BookInfo[];
  filters: string;
  options: option[];
  setFilters: React.Dispatch<React.SetStateAction<string>>;
}

function useBookData(): UseBooksDataResult {
  const state = useContext(BooksInfoStateContext);
  const books: any = state[0];
  const [filters, setFilters] = useState<any>('title');
  const [options, setOptions] = useState<option[]>([]);

  useEffect(() => {
    setOptions(searchByOption(books,filters));
  }, [filters, books]);


  return {
    books,
    filters,
    options,
    setFilters,
  };
}

export default useBookData;
