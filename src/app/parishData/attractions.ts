// src/app/parishData/attractions.ts
export type AttractionInfo = {
  name: string;
  parishCode?: string;
  type?: "beach" | "waterfall" | "park" | "museum" | "historic" | "scenic" | "other";
  description?: string;
  url?: string;
};

export const ATTRACTIONS: AttractionInfo[] = [
  { name: "Bob Marley Museum", parishCode: "kingston", type: "museum", description: "Home of reggae legend Bob Marley." },
  { name: "Devon House", parishCode: "kingston", type: "historic", description: "Historic mansion & local food stalls." },
  { name: "Dunn's River Falls", parishCode: "st-ann", type: "waterfall", description: "Famous climbable waterfall." },
  { name: "Blue Lagoon", parishCode: "portland", type: "scenic", description: "Deep colored lagoon ideal for swimming." },
  { name: "Frenchman's Cove", parishCode: "portland", type: "beach", description: "Lush pocket beach with river mouth." },
  { name: "Seven Mile Beach (Negril)", parishCode: "westmoreland", type: "beach", description: "Long white sand beach and sunset cruises." },
  { name: "YS Falls", parishCode: "st-elizabeth", type: "waterfall", description: "Tiered falls with swim areas and picnic spots." },
  { name: "Appleton Estate", parishCode: "st-elizabeth", type: "historic", description: "Rum estate tours & tastings." },
  { name: "Port Royal", parishCode: "kingston", type: "historic", description: "Famed pirate town with museums and ruins." },
];

export default ATTRACTIONS;
