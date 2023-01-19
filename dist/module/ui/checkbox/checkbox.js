import { Adapter } from "@nitipit/adapter/src/adapter";
import { html, render } from 'uhtml';
import { CheckboxStyle } from './checkbox.style';
export class Checkbox extends Adapter {
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
            checkbox: null
        };
        this.el.checkbox = this.querySelector('input[type="checkbox"]')
            || html `<input type="checkbox">`;
        this.render();
    }
    render() {
        render(this, html `
        ${this.el.checkbox}
        <span></span>
        `);
        this.el.checkbox = this.querySelector('input[type="checkbox"]');
    }
    ;
}
Checkbox.Style = CheckboxStyle;
