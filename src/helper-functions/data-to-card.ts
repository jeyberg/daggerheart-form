import { Feature } from "../types";
import { CardData, CardType } from "../types/card-description";

export const dataToCard = (id: string, type: CardType, title: string, features: Feature[]) => {
    const newCard: CardData = {
      id: id,
      type: type,
      title: title,
      description: features
        .map((feat) => {
          const desc = feat.name + ': ' + feat.description + '\r\n' + feat.effects.join('\r\n');
          return desc
        })
        .join(''),
    };
    return newCard;
  }