import { Adapter } from "@nitipit/adapter/src/adapter";
import { html, render } from 'uhtml';
import { InputNumberStyle } from './input-number.style';
export class InputNumber extends Adapter {
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
        this.stepIntervalThreshold = null;
        this._stepIntervalThreshold = null;
        this.stepInterval = null;
        this._stepInterval = null;
        this.stepChangeDelay = null;
        this.stepChangeTimeout = null;
        this.el = {
            input: null
        };
        this.stepIntervalThreshold = parseInt(this.getAttribute('stepIntervalThreshold') || "700");
        this.stepInterval = parseInt(this.getAttribute('stepInterval') || "100");
        this.stepChangeDelay = parseInt(this.getAttribute('stepChangeDelay') || "1000");
        this.el.input = this.querySelector('input[type="number"]') ||
            html `<input type="number">`;
        this.render();
    }
    render() {
        render(this, html `
            ${this.el.input}
            <button el="down"
                @mousedown=${() => this.stepDownStart()}
                @mouseup=${() => this.pressStop()}
                @mouseout=${() => this.pressStop()}
            >-</button>
            <button el="up"
                @mousedown=${() => this.stepUpStart()}
                @mouseup=${() => this.pressStop()}
                @mouseout=${() => this.pressStop()}
            >+</button>
        `);
        this.el.input = this.querySelector('input[type="number"]');
        this.el.input.addEventListener('change', () => {
            this.oldValue = this.el.input.value;
            this.dispatchEvent(new Event('change'));
        });
    }
    emitStepChangeEvent() {
        clearTimeout(this.stepChangeTimeout);
        if (this.oldValue == this.el.input.value) {
            return;
        }
        ;
        this.stepChangeTimeout = setTimeout(() => {
            this.oldValue = this.el.input.value;
            this.dispatchEvent(new Event('change'));
        }, this.stepChangeDelay);
    }
    stepUpStart() {
        this.el.input.stepUp();
        this._stepIntervalThreshold = setTimeout(() => {
            this._stepInterval = setInterval(() => {
                this.el.input.stepUp();
            }, this.stepInterval);
        }, this.stepIntervalThreshold);
    }
    stepDownStart() {
        this.el.input.stepDown();
        this._stepIntervalThreshold = setTimeout(() => {
            this._stepInterval = setInterval(() => {
                this.el.input.stepDown();
            }, this.stepInterval);
        }, this.stepIntervalThreshold);
    }
    pressStop() {
        if (this._stepIntervalThreshold) {
            clearTimeout(this._stepIntervalThreshold);
            clearInterval(this._stepInterval);
            this.emitStepChangeEvent();
        }
    }
}
InputNumber.Style = InputNumberStyle;
