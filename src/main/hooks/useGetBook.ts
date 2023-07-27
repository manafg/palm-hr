import { useQuery } from "react-query";

import { BookInfo } from "../context/BooksContext/types";
import { getBooks } from "../utils/getBooks";

export function useGetBooks(config: any) {
  // @ts-ignore
  return useQuery<BookInfo[], Error>("getBooks", getBooks, {
    refetchOnWindowFocus: false,
    retry: false,
    ...config,
  });
}
