// src/app/parishData/flights.ts
export type FlightInfo = {
  airportCode: string;
  name: string;
  city: string;
  parishHint?: string;
  notes?: string;
};

export const FLIGHTS: FlightInfo[] = [
  { airportCode: "MBJ", name: "Sangster International Airport", city: "Montego Bay", parishHint: "st-james", notes: "Main west-coast international gateway" },
  { airportCode: "KIN", name: "Norman Manley International Airport", city: "Kingston", parishHint: "kingston", notes: "Serves Kingston & southeast Jamaica" },
  { airportCode: "OCJ", name: "Boscobel / Ian Fleming Intl (near Ocho Rios)", city: "Ocho Rios", parishHint: "st-ann", notes: "Smaller international/charter operations" },
];

export default FLIGHTS;
