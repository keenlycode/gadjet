import { StyledElement } from "../ui";
import { ButtonSquareStyle } from "./button-square.style";
export class ButtonSquare extends StyledElement {
    constructor() {
        super();
        this.classList.add('button');
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
ButtonSquare.Style = ButtonSquareStyle;
