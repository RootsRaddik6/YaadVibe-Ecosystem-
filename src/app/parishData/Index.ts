// src/app/parishData/index.ts
export type TransportOption = {
  name: string;
  type: "bus" | "shuttle" | "taxi" | "ferry" | "private";
  operator?: string;
  phone?: string;
  notes?: string;
};

export type HotelInfo = {
  name: string;
  rating?: number; // 1-5
  neighborhood?: string;
  url?: string;
};

export type TourInfo = {
  name: string;
  durationMins?: number;
  description?: string;
  provider?: string;
  url?: string;
};

export type Parish = {
  name: string;
  towns: string[];
  airport?: string | null;
  attractions: string[];
  hotels: HotelInfo[];
  transport: TransportOption[];
  tours: TourInfo[];
  notes?: string;
};

export const parishes: Parish[] = [
  {
    name: "Kingston",
    towns: ["Kingston", "New Kingston", "Port Royal", "Papine"],
    airport: "KIN (Norman Manley Intl.)",
    attractions: [
      "Bob Marley Museum",
      "Devon House",
      "Emancipation Park",
      "National Gallery of Jamaica",
    ],
    hotels: [
      { name: "AC Hotel Kingston", rating: 4, neighborhood: "New Kingston" },
      { name: "Spanish Court Hotel", rating: 4, neighborhood: "New Kingston" },
      { name: "Courtleigh Hotel & Suites", rating: 4, neighborhood: "New Kingston" },
    ],
    transport: [
      { name: "Knutsford Express - Kingston Terminal", type: "bus", operator: "Knutsford Express" },
      { name: "Local Taxis (Route: Kingston areas)", type: "taxi" },
      { name: "Private Airport Shuttle Services", type: "shuttle", notes: "Bookable via suppliers" },
    ],
    tours: [
      { name: "Kingston City Cultural Tour", durationMins: 120, description: "Bob Marley Museum + Devon House", provider: "Local Guides" },
      { name: "Port Royal Historical Walk", durationMins: 90, description: "History of Port Royal" },
    ],
  },
  {
    name: "St. Andrew",
    towns: ["Half Way Tree", "Constant Spring", "Mona"],
    airport: "KIN (Norman Manley Intl.)",
    attractions: ["Hope Botanical Gardens", "Blue Mountains access (hiking routes)"],
    hotels: [
      { name: "R Hotel Kingston", rating: 4, neighborhood: "Half Way Tree" },
      { name: "Altamont Court Hotel", rating: 3, neighborhood: "Constant Spring" },
    ],
    transport: [
      { name: "Local Route Taxis", type: "taxi" },
      { name: "Private mountain transfer", type: "private", notes: "Serves Blue Mountains" },
    ],
    tours: [
      { name: "Blue Mountains Day Hike", durationMins: 360, description: "Coffee estates + hiking", provider: "Blue Mountain Tours" },
    ],
  },
  {
    name: "St. Thomas",
    towns: ["Morant Bay", "Yallahs", "Bath"],
    attractions: ["Reggae Falls", "Bath Fountain (mineral baths)"],
    hotels: [{ name: "Golden Shore Hotel", rating: 3 }],
    transport: [{ name: "Local buses (Minibuses)", type: "bus" }],
    tours: [{ name: "Eastern St. Thomas Coastal Tour", description: "Beaches and coastal viewpoints" }],
  },
  {
    name: "Portland",
    towns: ["Port Antonio", "Buff Bay", "Boston Bay"],
    attractions: ["Blue Lagoon", "Frenchman's Cove", "Dolphin Cove (nearby)"],
    hotels: [
      { name: "Trident Hotel", rating: 5, neighborhood: "Blue Lagoon" },
      { name: "Geejam Hotel", rating: 5, neighborhood: "San San" },
    ],
    transport: [
      { name: "Route taxis (Port Antonio)", type: "taxi" },
      { name: "Private boat charters (Boston Bay)", type: "private" },
    ],
    tours: [
      { name: "Rio Grande River Rafting", durationMins: 120, provider: "Rio Grande Tours" },
      { name: "Blue Lagoon Swim & Boat Tour", durationMins: 90 },
    ],
  },
  {
    name: "St. Mary",
    towns: ["Port Maria", "Oracabessa", "Annotto Bay"],
    attractions: ["GoldenEye area", "James Bond Beach", "Oracabessa Bay"],
    hotels: [
      { name: "GoldenEye (nearby)", rating: 5, neighborhood: "Oracabessa" },
      { name: "Sandals Royal Plantation (Ocho Rios region)", rating: 5 },
    ],
    transport: [{ name: "Grapevine shuttle services", type: "shuttle" }],
    tours: [
      { name: "Oracabessa Bay snorkeling", durationMins: 120 },
      { name: "James Bond Beach visit", durationMins: 90 },
    ],
  },
  {
    name: "St. Ann",
    towns: ["Ocho Rios", "Bamboo", "Hector's River"],
    airport: "MBJ (Sangster Intl. is in Montego Bay but most flights to Ocho Rios via MBJ or KIN connections)",
    attractions: [
      "Dunn's River Falls",
      "Dolphin Cove Ocho Rios",
      "Fern Gully",
      "White River tubing",
    ],
    hotels: [
      { name: "Moon Palace Jamaica", rating: 5, neighborhood: "Ocho Rios area" },
      { name: "Sandals Ochi", rating: 5, neighborhood: "Ocho Rios" },
    ],
    transport: [
      { name: "Shuttle services (MBJ ↔ Ocho Rios)", type: "shuttle" },
      { name: "Local taxis", type: "taxi" },
    ],
    tours: [
      { name: "Dunn's River Falls climb & beach day", durationMins: 240, provider: "Local operators" },
      { name: "White River Tubing + Falls", durationMins: 180 },
    ],
  },
  {
    name: "Trelawny",
    towns: ["Falmouth", "Pall Mall", "Duncans"],
    attractions: ["Falmouth Georgian architecture", "Luminous Lagoon (nearby)"],
    hotels: [
      { name: "Falmouth Heritage Hotels", rating: 4 },
      { name: "Holiday Inn Montego Bay (nearby)", rating: 4 },
    ],
    transport: [{ name: "Shuttle / coach transfers", type: "shuttle" }],
    tours: [{ name: "Falmouth historic walking tour", durationMins: 90 }],
  },
  {
    name: "St. James",
    towns: ["Montego Bay", "Ironshore", "Barnett"],
    airport: "MBJ (Sangster International Airport)",
    attractions: ["Doctor's Cave Beach", "Hip Strip", "Rose Hall Great House"],
    hotels: [
      { name: "Half Moon", rating: 5, neighborhood: "Rose Hall" },
      { name: "Hyatt Zilara/Hyatt Ziva Montego Bay", rating: 5, neighborhood: "Montego Bay" },
      { name: "Round Hill Hotel & Villas", rating: 5, neighborhood: "Round Hill" },
    ],
    transport: [
      { name: "Rockshore private transfers", type: "private" },
      { name: "Knutsford Express - Montego Bay Terminal", type: "bus" },
    ],
    tours: [
      { name: "Rose Hall Great House & Night Ghost Tour", durationMins: 120 },
      { name: "Montego Bay water sports cluster (jet ski, banana boat)", durationMins: 90 },
    ],
  },
  {
    name: "Hanover",
    towns: ["Lucea", "Harcourt", "Hopewell"],
    attractions: ["Lucea Harbour", "Westmoreland beaches nearby"],
    hotels: [{ name: "Local guesthouses", rating: 3 }],
    transport: [{ name: "Route taxis and minibuses", type: "bus" }],
    tours: [{ name: "West End coastal exploration", durationMins: 120 }],
  },
  {
    name: "Westmoreland",
    towns: ["Negril", "Savanna-La-Mar", "Little London"],
    attractions: ["Negril Seven Mile Beach", "Rick's Cafe (cliff diving)"],
    hotels: [
      { name: "Couples Negril", rating: 5, neighborhood: "Negril" },
      { name: "Negril Tree House Resort", rating: 4, neighborhood: "Negril" },
    ],
    transport: [
      { name: "Local taxis (Negril area)", type: "taxi" },
      { name: "Bus routes to Montego Bay / Kingston", type: "bus" },
    ],
    tours: [
      { name: "Negril sunset cruise", durationMins: 90 },
      { name: "Rick's Cafe cliff dive visit", durationMins: 60 },
    ],
  },
  {
    name: "Manchester",
    towns: ["Mandeville", "Christiana", "Holywell"],
    attractions: ["Mandeville's cool hills", "Marshall's Pen (local sights)"],
    hotels: [{ name: "Mandeville inns & guest houses", rating: 3 }],
    transport: [{ name: "Intercity buses (to Kingston/MBJ)", type: "bus" }],
    tours: [{ name: "Mandeville cultural walk", durationMins: 90 }],
  },
  {
    name: "Clarendon",
    towns: ["May Pen", "Savanna-la-Mar (part)", "Frankfield"],
    attractions: ["Caves (e.g., Dairy River)", "Local farming tours"],
    hotels: [{ name: "Local hotels & guesthouses", rating: 3 }],
    transport: [{ name: "JUTC/Route taxis", type: "bus" }],
    tours: [{ name: "Clarendon agro-tour experience", durationMins: 180 }],
  },
  {
    name: "St. Elizabeth",
    towns: ["Black River", "Santa Cruz", "Llandilo"],
    attractions: ["Black River Safari", "YS Falls", "Appleton Estate (rum tours)"],
    hotels: [
      { name: "Treasure Beach guesthouses", rating: 3, neighborhood: "Treasure Beach" },
      { name: "Country inns near Black River", rating: 3 },
    ],
    transport: [{ name: "Boat safaris (Black River)", type: "private" }],
    tours: [
      { name: "Black River Safari & crocodile spotting", durationMins: 120 },
      { name: "YS Falls day trip", durationMins: 180 },
      { name: "Appleton Estate rum tour", durationMins: 120, provider: "Appleton" },
    ],
  },
  {
    name: "St. Catherine",
    towns: ["Spanish Town", "Portmore", "Linstead"],
    attractions: ["Spanish Town historic sites", "Higgs Fieldlocal parks"],
    hotels: [{ name: "Portmore guest accommodations", rating: 3 }],
    transport: [{ name: "Transport to Kingston & Ocho Rios", type: "bus" }],
    tours: [{ name: "Spanish Town heritage walking tour", durationMins: 90 }],
  },
];

export default parishes;
