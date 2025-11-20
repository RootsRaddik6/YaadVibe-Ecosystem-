// src/app/parishData/tours.ts
export type TourInfo = {
  name: string;
  parishCode?: string;
  durationMins?: number;
  description?: string;
  provider?: string;
  url?: string;
};

export const TOURS: TourInfo[] = [
  { name: "Bob Marley Museum Tour", parishCode: "kingston", durationMins: 90, description: "Cultural and music history tour in Kingston." },
  { name: "Port Royal Historical Walk", parishCode: "kingston", durationMins: 60, description: "Port Royal's maritime history." },
  { name: "Blue Mountains Coffee Hike", parishCode: "st-andrew", durationMins: 300, description: "Coffee estate tour + scenic hike." },
  { name: "Dunn's River Falls & Beach Day", parishCode: "st-ann", durationMins: 240, description: "Climb the falls then relax on the beach." },
  { name: "Rio Grande River Rafting", parishCode: "portland", durationMins: 120, description: "Bamboo rafting on the Rio Grande." },
  { name: "Blue Lagoon Swim & Boat Tour", parishCode: "portland", durationMins: 90, description: "Scenic lagoon boat tour and swim." },
  { name: "YS Falls Excursion", parishCode: "st-elizabeth", durationMins: 180, description: "Swim and waterfall visit with picnic options." },
  { name: "Negril Sunset Cruise", parishCode: "westmoreland", durationMins: 90, description: "Boat cruise along Negril coast at sunset." },
  { name: "Appleton Estate Rum Tour", parishCode: "st-elizabeth", durationMins: 120, description: "Rum history and tasting." },
];

export default TOURS;
