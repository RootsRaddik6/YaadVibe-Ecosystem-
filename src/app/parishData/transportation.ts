// src/app/parishData/transport.ts
export type TransportOption = {
  name: string;
  type: "bus" | "shuttle" | "taxi" | "boat" | "private" | "ferry";
  operator?: string;
  phone?: string;
  notes?: string;
  parishCode?: string;
};

export const TRANSPORT_OPTIONS: TransportOption[] = [
  { name: "Knutsford Express - Kingston Terminal", type: "bus", operator: "Knutsford Express", parishCode: "kingston", notes: "Major airport & intercity coach" },
  { name: "Knutsford Express - Montego Bay Terminal", type: "bus", operator: "Knutsford Express", parishCode: "st-james" },
  { name: "Local Route Taxis (Kingston)", type: "taxi", parishCode: "kingston" },
  { name: "Private Airport Shuttle Services", type: "private", notes: "Bookable through hotels or local operators" },
  { name: "Negril Taxi Network", type: "taxi", parishCode: "westmoreland" },
  { name: "Rio Grande Bamboo Raft Transfer", type: "boat", parishCode: "portland", notes: "Tour transfer via raft" },
  { name: "Port Antonio Boat Charters", type: "boat", parishCode: "portland" },
  { name: "Local Buses & Minibuses", type: "bus", notes: "Frequent routes across parishes" },
];

export default TRANSPORT_OPTIONS;
