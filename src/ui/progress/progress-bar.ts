import { Adapter } from "@nitipit/adapter/src/adapter";
import {render, html} from 'uhtml';
import { ProgressBarStyleParam, ProgressBarStyle } from './progress-bar.style';


export class ProgressBar extends Adapter {
    static Style = ProgressBarStyle;

    static tagStyle(style?: string | ProgressBarStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | ProgressBarStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | ProgressBarStyleParam): void {
        super.addStyle(style);
    }

    _value: number;
    max: number = 100;

    constructor() {
        super();
        this.render();
    }

    render() {
        render(this, html`<div el="progress"></div>`);
        this.max = parseFloat(this.getAttribute('max')) || this.max;
        this.value = parseFloat(this.getAttribute('value'));
    }

    set value(value: string | number) {
        if (typeof value != "number") {
            value = parseFloat(value);
        }
        this._value = value;
        if (isNaN(value)) {
            this.setLoop();
        } else {
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

    setProgress(value: number) {
        this.classList.remove('loop');
        this.classList.add('value');
        let progress: HTMLElement = this.querySelector('[el="progress"]');
        progress.style.width = `${value/this.max*100}%`;
    }
}
