import { ButtonStyle } from './button.style';
import { StyledElement } from '../ui';
export class Button extends StyledElement {
    static initStyle(style) {
        super.initStyle(style);
    }
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
Button.Style = ButtonStyle;
Button.tagName = 'button';
Button.initStyle();
