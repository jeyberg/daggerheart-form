import { CharacterClassName, characterClasses } from '../types/class';

export function isCharacterClass(value: any): value is CharacterClassName {
    return characterClasses.findIndex((element) => element === value) !== -1;
}
