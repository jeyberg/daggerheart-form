import { Domain, DomainCardType } from "./enums";
import { Feature } from "./feature.types";

export interface DomainCard {
    level: number;
    domain: Domain;
    recallCost: number;
    type: DomainCardType;
    name: string;
    features: Feature[]
}