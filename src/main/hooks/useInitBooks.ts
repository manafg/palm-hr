import { BookInfo } from "../context/BooksContext/types";
import useBookConfig from "./useBookConfig";
import { useGetBooks } from "./useGetBook";

function useBooksContextInit() {
  const { saveBooksMap } = useBookConfig();

  const onSuccess = (data: BookInfo[]) => {


    const books = data;

    saveBooksMap(books);
  };

  const { isLoading , refetch } = useGetBooks({ onSuccess });

  return { isLoading , refetch};
}

export default useBooksContextInit;
