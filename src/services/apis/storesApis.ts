import axios, { type AxiosResponse } from "axios";
import { ENDPOINTS } from "./endpoints";

type StoreType = {
    id: number;
    name: string;
    address_1: string;
    address_2: string | null;
    city: string;
    state: string;
    zip: string;
};

export type StoresResponseType = StoreType[];

export const getStores = (): Promise<AxiosResponse<StoresResponseType>> =>
    axios.get<StoresResponseType>(ENDPOINTS.stores);
