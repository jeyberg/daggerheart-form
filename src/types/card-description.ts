import { Domain } from "./enums";

export interface CardDescription {
    header: string;
    content: string;
}

export const cardTypes = ['spell', 'grimoire', 'ability', 'ancestry', 'community', 'subclass'];
export type CardType = typeof cardTypes[number];
export interface CardData {
    id: string;
    type: CardType;
    title: string;
    description: string;
    domain?: Domain[];
    levelRequirement?: number;
    recallCost?: number;
}