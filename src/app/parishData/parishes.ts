// src/app/parishData/parishes.ts
export type ParishSummary = {
  name: string;
  code: string;
  description?: string;
  image?: string;
  mainAirport?: string | null;
};

export const PARISHES: ParishSummary[] = [
  {
    name: "Kingston",
    code: "kingston",
    description: "Capital city parish — culture, museums, nightlife and business hub.",
    image: "/images/parishes/kingston.jpg",
    mainAirport: "KIN (Norman Manley Intl.)",
  },
  {
    name: "St. Andrew",
    code: "st-andrew",
    description: "Residential and commercial areas; gateway to the Blue Mountains.",
    image: "/images/parishes/st-andrew.jpg",
    mainAirport: "KIN (serves Kingston area)",
  },
  {
    name: "St. Catherine",
    code: "st-catherine",
    description: "Includes Spanish Town and Portmore; large urban and industrial areas.",
    image: "/images/parishes/st-catherine.jpg",
    mainAirport: null,
  },
  {
    name: "Clarendon",
    code: "clarendon",
    description: "Agricultural parish with access to inland tours and caves.",
    image: "/images/parishes/clarendon.jpg",
    mainAirport: null,
  },
  {
    name: "Manchester",
    code: "manchester",
    description: "Cooler hill town of Mandeville, central Jamaica.",
    image: "/images/parishes/manchester.jpg",
    mainAirport: null,
  },
  {
    name: "St. Elizabeth",
    code: "st-elizabeth",
    description: "Rural and coastal attractions such as Treasure Beach and YS Falls.",
    image: "/images/parishes/st-elizabeth.jpg",
    mainAirport: null,
  },
  {
    name: "Westmoreland",
    code: "westmoreland",
    description: "Negril and Seven Mile Beach — top west-coast destination.",
    image: "/images/parishes/westmoreland.jpg",
    mainAirport: "MBJ (nearest Sangster Intl. in Montego Bay)",
  },
  {
    name: "Hanover",
    code: "hanover",
    description: "Small parish with Lucea harbor and quiet coastal towns.",
    image: "/images/parishes/hanover.jpg",
    mainAirport: null,
  },
  {
    name: "St. James",
    code: "st-james",
    description: "Montego Bay — major resort town, nightlife, airport (MBJ).",
    image: "/images/parishes/st-james.jpg",
    mainAirport: "MBJ (Sangster Intl.)",
  },
  {
    name: "Trelawny",
    code: "trelawny",
    description: "Falmouth (cruise port) and cultural heritage sites.",
    image: "/images/parishes/trelawny.jpg",
    mainAirport: null,
  },
  {
    name: "St. Ann",
    code: "st-ann",
    description: "Ocho Rios and Dunn's River Falls — waterfall & adventure hub.",
    image: "/images/parishes/st-ann.jpg",
    mainAirport: null,
  },
  {
    name: "St. Mary",
    code: "st-mary",
    description: "Oracabessa and Port Maria — calm beaches and snorkeling.",
    image: "/images/parishes/st-mary.jpg",
    mainAirport: null,
  },
  {
    name: "Portland",
    code: "portland",
    description: "Port Antonio — Blue Lagoon, rafting, and lush coastal scenery.",
    image: "/images/parishes/portland.jpg",
    mainAirport: null,
  },
  {
    name: "St. Thomas",
    code: "st-thomas",
    description: "Eastern parish with mineral baths and small coastal towns.",
    image: "/images/parishes/st-thomas.jpg",
    mainAirport: null,
  },
];

export default PARISHES;
