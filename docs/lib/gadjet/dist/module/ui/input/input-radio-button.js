import { StyledElement } from "../ui";
import { render, html } from 'uhtml';
import { InputRadioButtonGroupStyle, InputRadioButtonStyle } from "./input-radio-button.style";
export class InputRadioButton extends StyledElement {
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
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    render() {
        render(this, html `
        ${this.el.input}
        <button>${this.text}</button>
        `);
    }
}
InputRadioButton.Style = InputRadioButtonStyle;
export class InputRadioButtonGroup extends StyledElement {
}
InputRadioButtonGroup.Style = InputRadioButtonGroupStyle;
