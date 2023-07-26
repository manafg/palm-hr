import { type } from "os";

type option = {
    title : string,
    id: string,
    firstLetter: string,
}

type SearchInputProps = {
    options: option[]
};

export type {SearchInputProps}