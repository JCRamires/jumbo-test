import type { Store } from "~/types/stores";

export const API_PAGE_SIZE = 20;

export const filterStores = (stores: Store[], searchTerm: string): Store[] => [
  ...stores.filter((store) =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  ),
];

export const paginateArray = (array: any[], pageNumber: number): Store[] =>
  array.slice((pageNumber - 1) * API_PAGE_SIZE, pageNumber * API_PAGE_SIZE);
