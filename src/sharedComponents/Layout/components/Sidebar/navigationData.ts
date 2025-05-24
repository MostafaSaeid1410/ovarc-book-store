import booksIcon from "../../../../assets/icons/booksNav.svg";
import authorIcon from "../../../../assets/icons/authorNav.svg";
import storesIcon from "../../../../assets/icons/storeNav.svg";
import shopIcon from "../../../../assets/icons/shopNav.svg";

export interface NavigationItem {
    path: string;
    icon: string;
    label: string;
    description?: string;
}

export const navigationItems: NavigationItem[] = [
    {
        path: "/shop",
        icon: shopIcon,
        label: "Shop",
        description: "Purchase books and merchandise",
    },
    {
        path: "/stores",
        icon: storesIcon,
        label: "Stores",
        description: "Find bookstores near you",
    },
    {
        path: "/author",
        icon: authorIcon,
        label: "Authors",
        description: "Explore authors and their works",
    },
    {
        path: "/books",
        icon: booksIcon,
        label: "Books",
        description: "Browse and discover books",
    },
];
