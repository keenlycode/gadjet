import { ButtonGroupStyle } from "./button-group.style";
import { StyledElement } from "../ui";
export class ButtonGroup extends StyledElement {
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
ButtonGroup.Style = ButtonGroupStyle;
