import { Adapter } from "@nitipit/adapter/src/adapter";
import { ButtonSquareStyle, ButtonSquareStyleParam } from "./button-square.style";

export class ButtonSquare extends Adapter {
    static Style = ButtonSquareStyle;

    static tagStyle(style?: string | ButtonSquareStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | ButtonSquareStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | ButtonSquareStyleParam): void {
        super.addStyle(style);
    }

    constructor() {
        super();
        this.classList.add('button');
    }
}