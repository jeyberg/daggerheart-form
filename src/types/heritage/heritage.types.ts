export const ancestries = ["Clank", "Drakona", "Dwarf", "Elf", "Faerie", "Faun", "Firbolg", "Fungril", "Galapa", "Giant", "Goblin", "Halfling", "Human", "Inferis", "Katari", "Orc", "Ribbet", "Simiah"] as const;
export type Ancestry = typeof ancestries[number];

export const communities = ["Highborne", "Loreborne", "Orderborne", "Ridgeborne", "Seaborne", "Slyborne", "Underborne", "Wanderborne", "Wildborne"] as const;
export type Community = typeof communities[number];
