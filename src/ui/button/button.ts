import { Adapter } from "@nitipit/adapter/src/adapter";
import { 
    ButtonStyle, ButtonStyleParam
} from './button.style';


export class Button extends Adapter {
    static Style = ButtonStyle;
    static tagName: string = 'button';

    static define(tagName: string) {
        if (tagName === "button") {
            this.initStyle()
        } else {
            super.define(tagName);
        }
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