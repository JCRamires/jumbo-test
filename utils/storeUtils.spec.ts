import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { isStoreOpen } from "./storeUtils";
import type { Store } from "~/types/stores";

const STORE: Store = {
  storeId: "3126",
  name: "Jumbo Eindhoven Nederlandplein",
  websiteURL:
    "https://www.jumbo.com/winkel/eindhoven/jumbo-eindhoven-nederlandplein",
  location: {
    latitude: 51.479272,
    longitude: 5.46338,
    address: {
      street: "Nederlandplein",
      houseNumber: "103",
      postalCode: "5628AJ",
      city: "EINDHOVEN",
      state: "Noord-Brabant",
      countryCode: "NL",
    },
  },
  openingHours: {
    monday: {
      opensAt: "08:00+01:00",
      closesAt: "21:00+01:00",
    },
    tuesday: {
      opensAt: "08:00+01:00",
      closesAt: "21:00+01:00",
    },
    wednesday: {
      opensAt: "08:00+01:00",
      closesAt: "21:00+01:00",
    },
    thursday: {
      opensAt: "08:00+01:00",
      closesAt: "21:00+01:00",
    },
    friday: {
      opensAt: "08:00+01:00",
      closesAt: "21:00+01:00",
    },
    saturday: {
      opensAt: "08:00+01:00",
      closesAt: "21:00+01:00",
    },
    sunday: {
      opensAt: "10:00+01:00",
      closesAt: "20:00+01:00",
    },
  },
};

describe("storeUtils", () => {
  describe("isStoreOpen", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });
    it("Store should be open", () => {
      const date = new Date(2024, 1, 1, 13);
      vi.setSystemTime(date);

      const storeStatus = isStoreOpen(STORE);

      expect(storeStatus.open).toBe(true);
    });
    it("Store should be closed", () => {
      const date = new Date(2024, 1, 1, 6);
      vi.setSystemTime(date);

      const storeStatus = isStoreOpen(STORE);

      expect(storeStatus.open).toBe(false);
      expect(storeStatus.nextOpening).toBe("tomorrow at 09:00")
    });
  });
});
