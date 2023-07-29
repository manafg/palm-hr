import { useQuery } from "react-query";

import { BookInfo } from "../context/BooksContext/types";
import { getBook } from "../utils/getBook";

export function useGetSingleBook(id:string, config: any) {
  // @ts-ignore
  return useQuery<BookInfo[], Error>(["getBook", id],()=> getBook(id), {
    refetchOnWindowFocus: false,
    retry: false,
    ...config,
  });
}
