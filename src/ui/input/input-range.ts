import { Adapter } from "../../adapter";
import { InputRangeStyle, InputRangeStyleParam } from "./input-range.style";
import { Hole, html, render } from 'uhtml';


interface InputRangeChildElement {
    input: HTMLInputElement | Hole;
    fill: HTMLElement;
}


export class InputRange extends Adapter {
    static Style = InputRangeStyle;

    static tagStyle(style?: string | InputRangeStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | InputRangeStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | InputRangeStyleParam): void {
        super.addStyle(style);
    }

    el: InputRangeChildElement = {
        input: null,
        fill: null
    };

    constructor() {
        super();
        this.el.input = this.querySelector('input[type="range"]') as HTMLInputElement
            || html`<input type="range">`;
        this.render();
    }

    render() {
        render(this, html`
            <div el="fill"></div>
            ${this.el.input}
        `);
        this.el.input = this.querySelector('input[type="range"]') as HTMLInputElement;
        this.el.input.value = this.el.input.value || "0";
        this.el.input.min = this.el.input.min || "0";
        this.el.input.max = this.el.input.max || "100";

        this.el.fill = this.querySelector('div[el="fill"]');
        this._updateFillColor();
        this.addEventListener('input', () => {
            this._updateFillColor();
        })
    }

    _updateFillColor() {
        const input = this.el.input as HTMLInputElement;
        const ratio = (parseInt(input.value) - parseInt(input.min))
            / (parseInt(input.max) - parseInt(input.min));
        this.el.fill.style.width = `${ratio * 100}%`;
    }
}