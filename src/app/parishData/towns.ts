// src/app/parishData/towns.ts

export interface Town {
  parishCode: string;
  towns: string[];
}

export const TOWNS: Town[] = [
  { parishCode: "kingston", towns: ["Kingston", "Downtown", "New Kingston"] },
  { parishCode: "st-andrew", towns: ["Half Way Tree", "Constant Spring", "Papine", "Manor Park"] },
  { parishCode: "st-catherine", towns: ["Spanish Town", "Portmore", "Old Harbour"] },
  { parishCode: "clarendon", towns: ["May Pen", "Chapelton", "Milk River"] },
  { parishCode: "manchester", towns: ["Mandeville", "Christiana", "Porus"] },
  { parishCode: "st-elizabeth", towns: ["Black River", "Santa Cruz", "Treasure Beach"] },
  { parishCode: "westmoreland", towns: ["Negril", "Savanna-la-Mar", "Little London"] },
  { parishCode: "hanover", towns: ["Lucea", "Hopewell", "Green Island"] },
  { parishCode: "st-james", towns: ["Montego Bay", "Rose Hall", "Ironshore"] },
  { parishCode: "trelawny", towns: ["Falmouth", "Duncans", "Clarks Town"] },
  { parishCode: "st-ann", towns: ["Ocho Rios", "St. Ann’s Bay", "Runaway Bay"] },
  { parishCode: "st-mary", towns: ["Port Maria", "Annotto Bay", "Oracabessa"] },
  { parishCode: "portland", towns: ["Port Antonio", "Boston", "Buff Bay"] },
  { parishCode: "st-thomas", towns: ["Morant Bay", "Yallahs", "Seaforth"] },
];
