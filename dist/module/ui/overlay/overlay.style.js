import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor } from '../../style/bg-color';
;
export class OverlayStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
        `.trim();
        return css;
    }
    static style(style = {}) {
        let css = `
            ${this._bgColor(style)}
            ${this._opacity(style)}
        `.trim();
        return css;
    }
    static _bgColor(style = {}) {
        if (style.bgColor == undefined) {
            return '';
        }
        ;
        return `
            ${bgColor(style.bgColor)}
        `.trim();
    }
    static _opacity(style = {}) {
        if (style.opacity == undefined) {
            return '';
        }
        ;
        return `
            opacity: ${style.opacity};
        `.trim();
    }
}
OverlayStyle.default = {
    bgColor: 'black',
    opacity: '0.7'
};
