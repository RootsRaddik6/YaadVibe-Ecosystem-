// src/app/parishData/towns.ts
export type TownsForParish = {
  parishCode: string;
  towns: string[];
};

export const TOWNS: TownsForParish[] = [
  { parishCode: "kingston", towns: ["Kingston", "Downtown", "New Kingston", "Port Royal"] },
  { parishCode: "st-andrew", towns: ["Half Way Tree", "Mona", "Papine", "Constant Spring"] },
  { parishCode: "st-catherine", towns: ["Spanish Town", "Portmore", "Old Harbour", "Linstead"] },
  { parishCode: "clarendon", towns: ["May Pen", "Chapelton", "Frankfield"] },
  { parishCode: "manchester", towns: ["Mandeville", "Christiana", "Porus"] },
  { parishCode: "st-elizabeth", towns: ["Black River", "Santa Cruz", "Treasure Beach"] },
  { parishCode: "westmoreland", towns: ["Negril", "Savanna-la-Mar", "Little London"] },
  { parishCode: "hanover", towns: ["Lucea", "Hopewell"] },
  { parishCode: "st-james", towns: ["Montego Bay", "Rose Hall", "Ironshore"] },
  { parishCode: "trelawny", towns: ["Falmouth", "Duncans", "Martha Brae"] },
  { parishCode: "st-ann", towns: ["Ocho Rios", "St. Ann's Bay", "Bamboo"] },
  { parishCode: "st-mary", towns: ["Port Maria", "Oracabessa", "Annotto Bay"] },
  { parishCode: "portland", towns: ["Port Antonio", "Boston Bay", "Buff Bay"] },
  { parishCode: "st-thomas", towns: ["Morant Bay", "Yallahs", "Bath"] },
];

export default TOWNS;
