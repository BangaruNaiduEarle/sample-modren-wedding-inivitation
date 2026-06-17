import type { LocationConfig, LocationDetail } from "./location.types";

export const LOCATION_CONFIG: LocationConfig = {
  venueName: "Temple Mandap & Grand Ballroom",
  address: "Hyderabad, Telangana",
  city: "India",
  mapsUrl: "https://maps.google.com",
} as const;

export const LOCATION_DETAILS: readonly LocationDetail[] = [
  { label: "Ceremony", value: "Temple Mandap — Dec 15, 9:00 AM" },
  { label: "Reception", value: "Grand Ballroom — Dec 15, 7:00 PM" },
  { label: "Parking", value: "Valet available at main entrance" },
] as const;
