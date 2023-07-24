import { Dispatch, ReactNode, SetStateAction } from "react";

import {BookInfo} from './BookType'

type BooksInfoState = BookInfoResponse[]| null;

type SetBooksInfoState = Dispatch<SetStateAction<BooksInfoState>>;

type BooksInfoContext = [BooksInfoState, SetBooksInfoState];

type BooksInfoContextProviderProps = {
    children: ReactNode;
};

type BookInfoResponse = {
    kind: string,
    totalItems: number,
    items : BookInfo[]
}

export type { BooksInfoContextProviderProps, BooksInfoContext, BooksInfoState, SetBooksInfoState, BookInfo };

