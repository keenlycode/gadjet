import { StyledElement } from "../ui";
import { ButtonPinStyle } from "./button-pin.style";
export class ButtonPin extends StyledElement {
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
ButtonPin.Style = ButtonPinStyle;
