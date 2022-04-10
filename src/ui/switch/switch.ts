import {html, render} from 'uhtml'
import { StyledElement } from '../ui';
import { SwitchStyle, SwitchStyleParam } from './switch.style';

export class Switch extends StyledElement {
    static Style = SwitchStyle;

    static tagStyle(style?: SwitchStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: SwitchStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: SwitchStyleParam): void {
        super.addStyle(style);
    }

    constructor() {
        super();
        this.render();
    }

    render() {
        let checkbox = this.querySelector('input[type="checkbox"]') ||
            html`<input type="checkbox">`;
        let label = this.querySelector('div[el="label"]') ||
            html`
                <div el="label">
                    <span></span>
                    <span></span>
                </div>
            `;
        let pin = this.querySelector('div[el="pin"]') ||
            html`<div el="pin"></div>`;
        render(this, html`
            ${checkbox}
            ${label}
            ${pin}
        `)
    }
}