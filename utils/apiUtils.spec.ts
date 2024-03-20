import { describe, expect, it } from "vitest";
import jumboStores from "../server/api/jumbo-store-data.json";
import { filterStores, paginateArray } from "./apiUtils";
import type { Store } from "~/types/stores";

describe("apiUtils", () => {
  describe("filterStores", () => {
    it("Should return all stores is searchTerm is empty", () => {
      const filteredStores = filterStores(jumboStores.stores as Store[], "");

      expect(filteredStores.length).toBe(806);
    });
    it("Should filter stores by store name", () => {
      const filteredStores = filterStores(
        jumboStores.stores as Store[],
        "nederlandplein"
      );

      expect(filteredStores.length).toBe(1);
    });
  });

  describe("paginateArray", () => {
    it("Should return the correct number of entries", () => {
      const paginatedArray = paginateArray(jumboStores.stores as Store[], 1)

      expect(paginatedArray.length).toBe(20)
    })
    it("Should return the correct entries by page", () => {
      const paginatedArray = paginateArray(jumboStores.stores as Store[], 2)

      expect(paginatedArray[0].name).toBe('Jumbo Veldhoven Citycentrum')
      expect(paginatedArray[19].name).toBe('Jumbo Heeswijk Dinther St. Servatiusstraat')
    })
  })
});
