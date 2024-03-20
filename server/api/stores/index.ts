import { ApiResponse, Store } from "~/types/stores";
import jumboStores from "../jumbo-store-data.json";
import { filterStores, paginateArray } from "~/utils/apiUtils";

export default defineEventHandler((event): ApiResponse => {
  const query = getQuery(event);

  const page = (query.p as number) || 1;
  const searchTerm = query.q as string;

  const filteredStores = filterStores(
    jumboStores.stores as Store[],
    searchTerm
  );
  const storesToDisplay = paginateArray(filteredStores, page);

  return { stores: storesToDisplay, totalCount: filteredStores.length };
});
