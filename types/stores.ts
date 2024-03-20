export interface StoreLocation {
  latitude: number;
  longitude: number;
  address: {
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    state: string;
    countryCode: string;
  };
}

export interface DayWorkingHours {
  opensAt: string;
  closesAt: string;
}

export interface OpeningHours {
  monday: DayWorkingHours;
  tuesday: DayWorkingHours;
  wednesday: DayWorkingHours;
  thursday: DayWorkingHours;
  friday: DayWorkingHours;
  saturday: DayWorkingHours;
  sunday: DayWorkingHours;
}

export interface Store {
  storeId: string;
  name: string;
  websiteURL: string;
  location: StoreLocation;
  openingHours: OpeningHours;
}

export interface ApiResponse {
  stores: Store[];
  totalCount: number;
}
