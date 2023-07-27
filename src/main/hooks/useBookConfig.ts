import {produce} from "immer";
import { useContext, useCallback } from "react";
import { BookInfo, BooksInfoContext } from '../context/BooksContext/types'
import { BooksInfoStateContext } from '../context'
import {searchByAuthor , searchByPuplisher, searchByTitle} from '../utils/sorting'
function useBookConfig() {
    const [state, setState] = useContext<BooksInfoContext>(BooksInfoStateContext);
  
    const saveBooksMap = useCallback(
      (BooksResponse: BookInfo[]) => {
        const parsedBooks: BookInfo[] = BooksResponse;
  
        setState(parsedBooks);
      },
      [setState],
    );

    const searchByTitleCallBack  = useCallback(
        (text: string) => {
          const sortedBooks= produce(state, draft =>
            // @ts-ignore
            searchByTitle(draft, text),
          );
          setState(sortedBooks);
        },
        [setState],
      );

      const searchByPuplisherCallBack  = useCallback(
        (text: string) => {
          const sortedBooks= produce(state, draft =>
            // @ts-ignore
            searchByPuplisher(state, text),
          );
    
          setState(sortedBooks);
        },
        [setState],
      );

      const searchByAuthorCallBack = useCallback(
        (text: string) => {
          const sortedBooks= produce(state, draft =>
            // @ts-ignore
            searchByAuthor(state, text),
          );
    
          setState(sortedBooks);
        },
        [setState],
      );

    return {
        state,
        setState,
        saveBooksMap,
        searchByTitleCallBack,
        searchByAuthorCallBack,
        searchByPuplisherCallBack
      };

}

export default useBookConfig;