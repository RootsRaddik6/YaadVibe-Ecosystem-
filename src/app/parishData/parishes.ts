// src/app/parishData/parishes.ts

export interface Parish {
  name: string;
  code: string;
  description: string;
  image?: string;
}

export const PARISHES: Parish[] = [
  {
    name: "Kingston",
    code: "kingston",
    description: "Capital city parish, hub for nightlife, culture, and business.",
    image: "/images/parishes/kingston.jpg",
  },
  {
    name: "St. Andrew",
    code: "st-andrew",
    description: "Home to Half Way Tree, New Kingston, and Blue Mountains trailheads.",
    image: "/images/parishes/st-andrew.jpg",
  },
  {
    name: "St. Catherine",
    code: "st-catherine",
    description: "Includes Portmore, Spanish Town, and fast-growing urban regions.",
    image: "/images/parishes/st-catherine.jpg",
  },
  {
    name: "Clarendon",
    code: "clarendon",
    description: "Central plains, farming regions, and the Milk River Spa.",
    image: "/images/parishes/clarendon.jpg",
  },
  {
    name: "Manchester",
    code: "manchester",
    description: "Cool climate parish with Mandeville town centre.",
    image: "/images/parishes/manchester.jpg",
  },
  {
    name: "St. Elizabeth",
    code: "st-elizabeth",
    description: "Treasure Beach, Black River Safari, and farming parish.",
    image: "/images/parishes/st-elizabeth.jpg",
  },
  {
    name: "Westmoreland",
    code: "westmoreland",
    description: "Negril’s 7-mile beach and cliff-side attractions.",
    image: "/images/parishes/westmoreland.jpg",
  },
  {
    name: "Hanover",
    code: "hanover",
    description: "Close to Negril and home to Lucea and Hopewell.",
    image: "/images/parishes/hanover.jpg",
  },
  {
    name: "St. James",
    code: "st-james",
    description: "Montego Bay, Hip Strip, resorts, and Sangster Airport.",
    image: "/images/parishes/st-james.jpg",
  },
  {
    name: "Trelawny",
    code: "trelawny",
    description: "Falmouth Cruise Port and rafting on the Martha Brae.",
    image: "/images/parishes/trelawny.jpg",
  },
  {
    name: "St. Ann",
    code: "st-ann",
    description: "Ocho Rios, Dunn’s River Falls, Mystic Mountain.",
    image: "/images/parishes/st-ann.jpg",
  },
  {
    name: "St. Mary",
    code: "st-mary",
    description: "Port Maria, quiet beaches, Oracabessa.",
    image: "/images/parishes/st-mary.jpg",
  },
  {
    name: "Portland",
    code: "portland",
    description: "Blue Lagoon, Port Antonio, Reach Falls.",
    image: "/images/parishes/portland.jpg",
  },
  {
    name: "St. Thomas",
    code: "st-thomas",
    description: "Bath Fountain, Yallahs, and eastern coastline.",
    image: "/images/parishes/st-thomas.jpg",
  },
];
