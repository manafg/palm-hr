import {produce} from "immer";
import { useContext, useCallback } from "react";
import { BookInfo, BooksInfoContext } from '../context/BooksContext/types'
import { BooksInfoStateContext } from '../context'
import {searchByKey} from '../utils/sorting'

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
          const sortedBooks= produce(state, (draft) => 
            // @ts-ignore
            searchByKey(draft, text, 'title')
        );
        // @ts-ignore
          setState(sortedBooks);
        },
        [setState , state],
      );

      const searchByPuplisherCallBack  = useCallback(
        (text: string) => {
          const sortedBooks= produce(state, (draft) =>
            // @ts-ignore
            searchByKey(draft, text, 'publisher'),
          );
    
          setState(sortedBooks);
        },
        [setState, state],
      );

      const searchByAuthorCallBack = useCallback(
        (text: string) => {
          const sortedBooks= produce(state, (draft) =>
            // @ts-ignore
            searchByKey(draft, text, 'authors'),
          );
    
          setState(sortedBooks);
        },
        [setState, state],
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