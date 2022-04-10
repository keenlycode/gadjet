import { StyledElement } from '../ui';
import { CardStyle } from './card.style';
export class Card extends StyledElement {
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
