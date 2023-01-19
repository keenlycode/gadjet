import { Adapter } from "@nitipit/adapter/src/adapter";
import { InputRangeStyle } from "./input-range.style";
import { html, render } from 'uhtml';
export class InputRange extends Adapter {
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
            input: null,
            fill: null
        };
        this.el.input = this.querySelector('input[type="range"]')
            || html `<input type="range">`;
        this.render();
    }
    render() {
        render(this, html `
            <div el="fill"></div>
            ${this.el.input}
        `);
        this.el.input = this.querySelector('input[type="range"]');
        this.el.input.value = this.el.input.value || "0";
        this.el.input.min = this.el.input.min || "0";
        this.el.input.max = this.el.input.max || "100";
        this.el.fill = this.querySelector('div[el="fill"]');
        this._updateFillColor();
        this.addEventListener('input', () => {
            this._updateFillColor();
        });
    }
    _updateFillColor() {
        const input = this.el.input;
        const ratio = (parseInt(input.value) - parseInt(input.min))
            / (parseInt(input.max) - parseInt(input.min));
        this.el.fill.style.width = `${ratio * 100}%`;
    }
}
InputRange.Style = InputRangeStyle;
