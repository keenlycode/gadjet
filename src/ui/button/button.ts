import { 
    ButtonStyle, ButtonStyleParam
} from './button.style';
import { StyledElement } from '../ui';

export class Button extends StyledElement {
    static Style = ButtonStyle;
    static tagName: string = 'button';

    static initStyle(style?: ButtonStyleParam): void {
        super.initStyle(style)
    }

    static tagStyle(style?: string | ButtonStyleParam): void {
        super.tagStyle(style)
    }
    
    static classStyle(class_: string, style?: string | ButtonStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | ButtonStyleParam): void {
        super.addStyle(style);   
    }
}

Button.initStyle();