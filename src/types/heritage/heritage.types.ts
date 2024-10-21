import { Feature } from "../feature.types";

export const ancestries = ["Clank", "Drakona", "Dwarf", "Elf", "Faerie", "Faun", "Firbolg", "Fungril", "Galapa", "Giant", "Goblin", "Halfling", "Human", "Inferis", "Katari", "Orc", "Ribbet", "Simiah"] as const;
export type AncestryName = typeof ancestries[number];
export interface Ancestry {
    name: AncestryName;
    features: Feature[]
}

export const communities = ["Highborne", "Loreborne", "Orderborne", "Ridgeborne", "Seaborne", "Slyborne", "Underborne", "Wanderborne", "Wildborne"] as const;
export type CommunityName = typeof communities[number];
export interface Community {
    name: CommunityName;
    feature: Feature;
    featureId: number;
}


