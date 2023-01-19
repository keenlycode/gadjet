import { Adapter } from "@nitipit/adapter/src/adapter";
import { render, html } from 'uhtml';
import { InputRadioButtonGroupStyle, InputRadioButtonStyle } from "./input-radio-button.style";
export class InputRadioButton extends Adapter {
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
        this.el = {
            input: null
        };
        this.text = this.innerText;
        this.el.input = this.querySelector('input[type="radio"]') ||
            html `<input type="radio">`;
        this.render();
    }
    render() {
        render(this, html `
        ${this.el.input}
        <button>${this.text}</button>
        `);
    }
}
InputRadioButton.Style = InputRadioButtonStyle;
export class InputRadioButtonGroup extends Adapter {
}
InputRadioButtonGroup.Style = InputRadioButtonGroupStyle;
