import { useEffect, useState } from 'react';
import { BookInfo } from "../context/BooksContext/types";
import { useGetSingleBook } from "./useGetSingleBook";

function useInitSingleBook(BookId: any) {
    const [book, setBook] = useState<BookInfo>();

  const onSuccess = (data: BookInfo) => {
    const book = data;

    setBook(book);
  };

  

  const { isLoading , refetch } = useGetSingleBook(BookId,{ onSuccess });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { isLoading ,book, refetch};
}

export default useInitSingleBook;
