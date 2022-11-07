import { BoxArrowStyle, BoxArrowStyleParam } from "./box-arrow.style";
import {Gadjet} from '../ui';
import {render, html} from 'uhtml';

export class BoxArrow extends Gadjet {
    static Style = BoxArrowStyle;

    static tagStyle(style?: string | BoxArrowStyleParam): void {
        super.tagStyle(style);
    }
    
    static classStyle(class_: string, style?: string | BoxArrowStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | BoxArrowStyleParam): void {
        super.addStyle(style);
    }

    _innerHTML: string;

    constructor() {
        super();
        this._innerHTML = this.innerHTML;
        this.render();
    }

    render() {
        render(this, html`
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