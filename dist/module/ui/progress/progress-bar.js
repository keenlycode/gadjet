import { Adapter } from "@nitipit/adapter/src/adapter";
import { render, html } from 'uhtml';
import { ProgressBarStyle } from './progress-bar.style';
export class ProgressBar extends Adapter {
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
        this.max = 100;
        this.render();
    }
    render() {
        render(this, html `<div el="progress"></div>`);
        this.max = parseFloat(this.getAttribute('max')) || this.max;
        this.value = parseFloat(this.getAttribute('value'));
    }
    set value(value) {
        if (typeof value != "number") {
            value = parseFloat(value);
        }
        this._value = value;
        if (isNaN(value)) {
            this.setLoop();
        }
        else {
            this.setProgress(value);
        }
    }
    get value() {
        return this._value;
    }
    setLoop() {
        this.classList.remove('value');
        this.classList.add('loop');
    }
    setProgress(value) {
        this.classList.remove('loop');
        this.classList.add('value');
        let progress = this.querySelector('[el="progress"]');
        progress.style.width = `${value / this.max * 100}%`;
    }
}
ProgressBar.Style = ProgressBarStyle;
