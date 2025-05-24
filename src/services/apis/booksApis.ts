import axios, { type AxiosResponse } from "axios";
import { ENDPOINTS } from "./endpoints";

type BookType = {
    id: number;
    author_id: number;
    name: string;
    isbn: string;
    language: string;
    page_count: number;
    format: string;
};

export type BooksResponseType = BookType[];

export const getBooks = (): Promise<AxiosResponse<BooksResponseType>> =>
    axios.get<BooksResponseType>(ENDPOINTS.books);
