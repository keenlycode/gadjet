import { StyledElement } from '../ui';
import { BadgeStyle } from './badge.style';
export class Badge extends StyledElement {
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
Badge.Style = BadgeStyle;
