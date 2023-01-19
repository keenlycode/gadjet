import { Adapter } from "@nitipit/adapter/src/adapter";
import { ButtonGroupStyle, ButtonGroupStyleParam } from "./button-group.style";

export class ButtonGroup extends Adapter {
    static Style = ButtonGroupStyle;

    static tagStyle(style?: string | ButtonGroupStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | ButtonGroupStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | ButtonGroupStyleParam): void {
        super.addStyle(style);
    }
}