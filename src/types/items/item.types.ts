export type Trait = "Agility" | "Strength" | "Finesse" | "Instinct" | "Presence" | "Knowledge";
export type WeaponRange = "Melee" | "Very Close" | "Close" | "Far" | "Very Far";
export type Die = "d4" | "d6" | "d8" | "d10" | "d12" | "d20";

export interface Weapon {
    is_secondary: boolean,
    name: string,
    trait: Trait,
    die: Die,
    damage_modifier: number,
    is_magical: boolean,
    burden: 1 | 2,
    feature: string
}

export interface Armor {
    name: string,
    base_score: number,
    feature: string
}