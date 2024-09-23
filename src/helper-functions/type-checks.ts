import { CharacterClass, characterClasses } from '../types/class';

export function isCharacterClass(value: any): value is CharacterClass {
    return characterClasses.findIndex((element) => element === value) !== -1;
}
