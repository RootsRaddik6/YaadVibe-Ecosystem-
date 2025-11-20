// src/app/parishData/hotels.ts
export type HotelInfo = {
  name: string;
  rating?: number;
  neighborhood?: string;
  url?: string;
  parishCode?: string; // convenience
};

export const HOTELS: HotelInfo[] = [
  // Kingston / St Andrew area
  { name: "Spanish Court Hotel", rating: 4, neighborhood: "New Kingston", url: "https://www.spanishcourt.com", parishCode: "kingston" },
  { name: "AC Hotel Kingston", rating: 4, neighborhood: "New Kingston", url: "https://www.marriott.com", parishCode: "kingston" },

  // Montego Bay / St James
  { name: "Half Moon", rating: 5, neighborhood: "Rose Hall", url: "https://www.halfmoon.com", parishCode: "st-james" },
  { name: "Hyatt Zilara / Ziva Montego Bay", rating: 5, neighborhood: "Montego Bay", url: "https://www.hyatt.com", parishCode: "st-james" },

  // Negril / Westmoreland
  { name: "Couples Negril", rating: 5, neighborhood: "Negril", url: "https://www.couples.com", parishCode: "westmoreland" },
  { name: "Negril Tree House Resort", rating: 4, neighborhood: "Negril", parishCode: "westmoreland" },

  // Ocho Rios / St Ann
  { name: "Moon Palace Jamaica", rating: 5, neighborhood: "Ocho Rios area", parishCode: "st-ann" },
  { name: "Sandals Ochi", rating: 5, neighborhood: "Ocho Rios", parishCode: "st-ann" },

  // Portland / Port Antonio
  { name: "Trident Hotel", rating: 5, neighborhood: "Blue Lagoon", url: "https://www.tridenthotel.com", parishCode: "portland" },
  { name: "Geejam Hotel", rating: 5, neighborhood: "San San", url: "https://www.geejam.com", parishCode: "portland" },

  // St Elizabeth / Treasure Beach (guesthouses)
  { name: "Jewel Grande (nearby)", rating: 5, parishCode: "st-elizabeth" },

  // Misc local guesthouses
  { name: "Local Guesthouse / Inn", rating: 3, parishCode: "st-mary" },
];

export default HOTELS;
