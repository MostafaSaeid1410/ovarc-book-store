import axios, { type AxiosResponse } from "axios";
import { ENDPOINTS } from "./endpoints";

type AuthorType = {
    id: number;
    author_id: number;
    name: string;
    isbn: string;
    language: string;
    page_count: number;
    format: string;
};

export type AuthorsResponseType = AuthorType[];

export const getAuthors = (): Promise<AxiosResponse<AuthorsResponseType>> =>
    axios.get<AuthorsResponseType>(ENDPOINTS.authors);
