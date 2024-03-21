import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import type { Store } from "~/types/stores";
import StoreStatus from "../StoreStatus.vue";

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

describe("StoreStatus", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("Store should be open", async () => {
    const date = new Date(2024, 1, 1, 13);
    vi.setSystemTime(date);

    const component = await mountSuspended(StoreStatus, {
      props: { store: STORE },
    });

    expect(component.html()).toMatchInlineSnapshot(`"<p class="text-green-500 font-bold">Open</p>"`)
  });

  it("Store should be closed", async () => {
    const date = new Date(2024, 1, 1, 6);
    vi.setSystemTime(date);

    const component = await mountSuspended(StoreStatus, {
      props: { store: STORE },
    });

    expect(component.html()).toMatchInlineSnapshot(`"<p><span class="text-red-500 font-bold">Closed</span>. Opens tomorrow at 09:00</p>"`)
  });
});
