import { Adapter } from "@nitipit/adapter/src/adapter";
import { ButtonGroupStyle } from "./button-group.style";
export class ButtonGroup extends Adapter {
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
