import { InputNumber } from './input-number';
import { render, html } from 'uhtml';
import { InputNumberCenterStyle } from './input-number-center.style';
export class InputNumberCenter extends InputNumber {
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
            <button el="down"
                @mousedown=${() => this.stepDownStart()}
                @mouseup=${() => this.pressStop()}
                @mouseout=${() => this.pressStop()}
            >-</button>
            ${this.el.input}
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
}
InputNumberCenter.Style = InputNumberCenterStyle;
