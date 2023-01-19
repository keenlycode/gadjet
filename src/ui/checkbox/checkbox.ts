import { Adapter } from "@nitipit/adapter/src/adapter";
import { Hole, html, render } from 'uhtml';
import {CheckboxStyle, CheckboxStyleParam} from './checkbox.style';

interface CheckboxChildElement {
    checkbox: Element | HTMLElement | Hole;
}

export class Checkbox extends Adapter {
    static Style = CheckboxStyle;
    el: CheckboxChildElement = {
        checkbox: null
    }

    static tagStyle(style?: string | CheckboxStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | CheckboxStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | CheckboxStyleParam): void {
        super.addStyle(style);
    }

    constructor() {
        super();
        this.el.checkbox = this.querySelector('input[type="checkbox"]')
            || html`<input type="checkbox">`;
        this.render();
    }

    render() {
        render(this, html`
        ${this.el.checkbox}
        <span></span>
        `);
        this.el.checkbox = this.querySelector('input[type="checkbox"]');
    };
}
