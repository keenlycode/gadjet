import { html, render } from 'uhtml';
import { StyledElement } from '../ui';
import { SwitchStyle } from './switch.style';
export class Switch extends StyledElement {
    constructor() {
        super();
        this.render();
    }
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
        let checkbox = this.querySelector('input[type="checkbox"]') ||
            html `<input type="checkbox">`;
        let label = this.querySelector('div[el="label"]') ||
            html `
                <div el="label">
                    <span></span>
                    <span></span>
                </div>
            `;
        let pin = this.querySelector('div[el="pin"]') ||
            html `<div el="pin"></div>`;
        render(this, html `
            ${checkbox}
            ${label}
            ${pin}
        `);
    }
}
Switch.Style = SwitchStyle;