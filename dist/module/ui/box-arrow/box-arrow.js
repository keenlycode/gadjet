import { Adapter } from "@nitipit/adapter/src/adapter";
import { BoxArrowStyle } from "./box-arrow.style";
import { render, html } from 'uhtml';
export class BoxArrow extends Adapter {
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
        this._innerHTML = this.innerHTML;
        this.render();
    }
    render() {
        render(this, html `
        <div el="box"></div>
        <div el="arrows">
            <div el="arrow-top"></div>
            <div el="arrow-right"></div>
            <div el="arrow-bottom"></div>
            <div el="arrow-left"></div>
        </div>
        `);
        const box = this.querySelector('[el="box"]');
        box.innerHTML = this._innerHTML;
    }
}
BoxArrow.Style = BoxArrowStyle;
