import { type } from "os";

type option = {
    title : string,
    firstLetter: string,
}

type SearchInputProps = {
    options: option[],
    type: string,
    clearSearch: any
};

export type {SearchInputProps}