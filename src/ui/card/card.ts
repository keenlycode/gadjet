import {StyledElement} from '../ui';
import { CardStyle, CardStyleParam } from './card.style';

export class Card extends StyledElement {
    static Style = CardStyle;

    static tagStyle(style?: string | CardStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | CardStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | CardStyleParam): void {
        super.addStyle(style);
    }
}