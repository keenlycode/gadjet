import { Adapter } from "@nitipit/adapter/src/adapter";
import { CardStyle } from './card.style';
export class Card extends Adapter {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
}
Card.Style = CardStyle;
