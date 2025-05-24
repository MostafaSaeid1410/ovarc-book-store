import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getStores, type StoresResponseType } from "../apis/storesApis";

export const STORES_QUERY_KEY = "STORES_QUERY_KEY";

export const useGetStores = (
    options?: Omit<
        UseQueryOptions<
            StoresResponseType,
            Error,
            StoresResponseType,
            [string]
        >,
        "queryKey" | "queryFn"
    >,
) => {
    return useQuery<StoresResponseType, Error, StoresResponseType, [string]>({
        queryKey: [STORES_QUERY_KEY],
        queryFn: async () => {
            const response = await getStores();
            return response.data;
        },
        ...options,
    });
};
