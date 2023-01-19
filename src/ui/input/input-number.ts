import { Adapter } from "@nitipit/adapter/src/adapter";
import { html, render } from 'uhtml';
import { InputNumberStyle, InputNumberStyleParam } from './input-number.style';


interface InputNumberChildElement {
    input: HTMLInputElement | any;
}

export class InputNumber extends Adapter {
    static Style = InputNumberStyle;

    static tagStyle(style?: string | InputNumberStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | InputNumberStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | InputNumberStyleParam): void {
        super.addStyle(style);
    }

    stepIntervalThreshold: any = null;
    _stepIntervalThreshold: any = null;
    stepInterval: any = null;
    _stepInterval: any = null;
    stepChangeDelay: any = null;
    stepChangeTimeout: any = null;

    oldValue: number | string;

    el: InputNumberChildElement = {
        input: null
    }

    constructor() {
        super();
        this.stepIntervalThreshold = parseInt(
            this.getAttribute('stepIntervalThreshold') || "700"
        );
        this.stepInterval = parseInt(
            this.getAttribute('stepInterval') || "100"
        );
        this.stepChangeDelay = parseInt(
            this.getAttribute('stepChangeDelay') || "1000"
        );
        this.el.input = this.querySelector('input[type="number"]') ||
            html`<input type="number">`;
        this.render();
    }

    render() {
        render(this, html`
            ${this.el.input}
            <button el="down"
                @mousedown=${() => this.stepDownStart()}
                @mouseup=${() => this.pressStop()}
                @mouseout=${() => this.pressStop() }
            >-</button>
            <button el="up"
                @mousedown=${() => this.stepUpStart()}
                @mouseup=${() => this.pressStop() }
                @mouseout=${() => this.pressStop() }
            >+</button>
        `);
        this.el.input = this.querySelector('input[type="number"]');
        this.el.input.addEventListener('change', () => {
            this.oldValue = this.el.input.value;
            this.dispatchEvent(new Event('change'));
        })
    }

    emitStepChangeEvent() {
        clearTimeout(this.stepChangeTimeout);
        if (this.oldValue == this.el.input.value) { return };
        this.stepChangeTimeout = setTimeout(() => {
            this.oldValue = this.el.input.value;
            this.dispatchEvent(new Event('change'));
        }, this.stepChangeDelay);
    }

    stepUpStart() {
        this.el.input.stepUp();
        this._stepIntervalThreshold = setTimeout(() => {
            this._stepInterval = setInterval(() => {
                this.el.input.stepUp()
            }, this.stepInterval)
        }, this.stepIntervalThreshold)
    }

    stepDownStart() {
        this.el.input.stepDown();
        this._stepIntervalThreshold = setTimeout(() => {
            this._stepInterval = setInterval(() => {
                this.el.input.stepDown()
            }, this.stepInterval)
        }, this.stepIntervalThreshold)
    }

    pressStop() {
        if (this._stepIntervalThreshold) {
            clearTimeout(this._stepIntervalThreshold);
            clearInterval(this._stepInterval);
            this.emitStepChangeEvent();
        }
    }
}