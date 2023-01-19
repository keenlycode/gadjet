import { Adapter } from "@nitipit/adapter/src/adapter";
import { ButtonStyle } from './button.style';
export class Button extends Adapter {
    static define(tagName) {
        if (tagName.toLocaleLowerCase() === "button") {
            this.tagName = "button";
            this.initStyle();
            return;
        }
        ;
        super.define(tagName);
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
