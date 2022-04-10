import { render, html } from "uhtml";
import { StyledElement } from "../ui";
import { InputRadioStyle } from "./input-radio.style";
export class InputRadio extends StyledElement {
    constructor() {
        super();
        this.el = {
            input: null
        };
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
        <span></span>
        `);
        this.el.input = this.querySelector('input[type="radio"]');
    }
}
InputRadio.Style = InputRadioStyle;
