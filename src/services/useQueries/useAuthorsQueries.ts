import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getAuthors, type AuthorsResponseType } from "../apis/authorsApis";

export const AUTHORS_QUERY_KEY = "AUTHORS_QUERY_KEY";

export const useGetAuthors = (
    options?: Omit<
        UseQueryOptions<
            AuthorsResponseType,
            Error,
            AuthorsResponseType,
            [string]
        >,
        "queryKey" | "queryFn"
    >,
) => {
    return useQuery<AuthorsResponseType, Error, AuthorsResponseType, [string]>({
        queryKey: [AUTHORS_QUERY_KEY],
        queryFn: async () => {
            const response = await getAuthors();
            return response.data;
        },
        ...options,
    });
};
