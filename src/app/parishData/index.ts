// src/app/parishData/index.ts

export interface ParishInfo {
  name: string;
  towns: string[];
}

export const parishes: ParishInfo[] = [
  { name: "Kingston", towns: ["Downtown", "New Kingston", "Half Way Tree"] },
  { name: "St. Andrew", towns: ["Constant Spring", "Red Hills", "Papine"] },
  { name: "St. Catherine", towns: ["Spanish Town", "Portmore", "Linstead"] },
  { name: "Clarendon", towns: ["May Pen", "Chapelton", "Frankfield"] },
  { name: "Manchester", towns: ["Mandeville", "Christiana", "Porus"] },
  { name: "St. Elizabeth", towns: ["Black River", "Santa Cruz", "Lacovia"] },
  { name: "Westmoreland", towns: ["Savanna-la-Mar", "Negril", "Grange Hill"] },
  { name: "Hanover", towns: ["Lucea", "Hopewell", "Sandy Bay"] },
  { name: "St. James", towns: ["Montego Bay", "Rose Hall", "Anchovy"] },
  { name: "Trelawny", towns: ["Falmouth", "Duncans", "Clark’s Town"] },
  { name: "St. Ann", towns: ["Ocho Rios", "St. Ann’s Bay", "Runaway Bay"] },
  { name: "St. Mary", towns: ["Port Maria", "Annotto Bay", "Highgate"] },
  { name: "Portland", towns: ["Port Antonio", "Buff Bay", "Long Bay"] },
  { name: "St. Thomas", towns: ["Morant Bay", "Yallahs", "Seaforth"] },
];
