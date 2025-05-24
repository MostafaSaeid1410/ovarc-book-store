import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getBooks, type BooksResponseType } from "../apis/booksApis";

export const BOOKS_QUERY_KEY = "BOOKS_QUERY_KEY";

export const useGetBooks = (
    options?: Omit<
        UseQueryOptions<BooksResponseType, Error, BooksResponseType, [string]>,
        "queryKey" | "queryFn"
    >,
) => {
    return useQuery<BooksResponseType, Error, BooksResponseType, [string]>({
        queryKey: [BOOKS_QUERY_KEY],
        queryFn: async () => {
            const response = await getBooks();
            return response.data;
        },
        ...options,
    });
};
