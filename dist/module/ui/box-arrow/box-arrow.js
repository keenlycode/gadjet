import { BoxArrowStyle } from "./box-arrow.style";
import { StyledElement } from '../ui';
import { render, html } from 'uhtml';
export class BoxArrow extends StyledElement {
    constructor() {
        super();
        this._innerHTML = this.innerHTML;
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
        render(this, html `
        <div el="box">${this._innerHTML}</div>
        <div el="arrows">
            <div el="arrow-top"></div>
            <div el="arrow-right"></div>
            <div el="arrow-bottom"></div>
            <div el="arrow-left"></div>
        </div>
        `);
    }
}
BoxArrow.Style = BoxArrowStyle;
