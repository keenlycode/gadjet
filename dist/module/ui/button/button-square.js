import { Adapter } from "@nitipit/adapter/src/adapter";
import { ButtonSquareStyle } from "./button-square.style";
export class ButtonSquare extends Adapter {
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    constructor() {
        super();
        this.classList.add('button');
    }
}
ButtonSquare.Style = ButtonSquareStyle;
