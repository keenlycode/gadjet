import { Adapter } from "@nitipit/adapter/src/adapter";
import { render, html } from 'uhtml';
import { 
    InputRadioButtonGroupStyle,
    InputRadioButtonStyle,
    InputRadioButtonStyleParam
} from "./input-radio-button.style";


interface InputRadioButtonChildElement {
    input: HTMLInputElement | any;
}

export class InputRadioButton extends Adapter {
    static Style = InputRadioButtonStyle;

    static tagStyle(style?: string | InputRadioButtonStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | InputRadioButtonStyleParam): void {
        super.classStyle(class_, style)
    }

    addStyle(style?: string | InputRadioButtonStyleParam): void {
        super.addStyle(style);
    }

    el: InputRadioButtonChildElement = {
        input: null
    }

    text: string;

    constructor() {
        super();
        this.text = this.innerText;
        this.el.input = this.querySelector('input[type="radio"]') ||
            html`<input type="radio">`;
        this.render();
    }

    render() {
        render(this, html`
        ${this.el.input}
        <button>${this.text}</button>
        `);
    }
}

export class InputRadioButtonGroup extends Adapter {
    static Style = InputRadioButtonGroupStyle;
}