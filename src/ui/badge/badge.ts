import { StyledElement } from '../ui';
import { BadgeStyle, BadgeStyleParam } from './badge.style';

export class Badge extends StyledElement {
    static Style = BadgeStyle;

    static tagStyle(style?: string | BadgeStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | BadgeStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | BadgeStyleParam): void {
        super.addStyle(style);
    }
}