import { Adapter } from "@nitipit/adapter/src/adapter";
import { render, html } from "uhtml";
import { InputRadioStyle, InputRadioStyleParam } from "./input-radio.style";

interface InputRadioChildElement {
    input: HTMLInputElement | any;
}

export class InputRadio extends Adapter {
    static Style = InputRadioStyle;

    static tagStyle(style?: string | InputRadioStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | InputRadioStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | InputRadioStyleParam): void {
        super.addStyle(style);
    }

    el: InputRadioChildElement = {
        input: null
    }

    constructor() {
        super();
        this.el.input = this.querySelector('input[type="radio"]') ||
            html`<input type="radio">`
        this.render();
    }

    render() {
        render(this, html`
        ${this.el.input}
        <span></span>
        `);
        this.el.input = this.querySelector('input[type="radio"]');
    }
}