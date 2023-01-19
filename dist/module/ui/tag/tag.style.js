import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor } from "../../style";
const Color = require('color');
export class TagStyleParam {
}
export class TagStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
        display: inline-flex;
        align-items: center;
        padding: 0.1em 0.4em;
        font-size: 0.9em;
        line-height: unset;
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        let css = `
        ${this._color(style)}
        ${this._borderRadius(style)}
        `.trim();
        return css;
    }
    static _color(style = {}) {
        if (style.color == undefined) {
            return '';
        }
        ;
        return `
        ${bgColor(style.color)}
        box-shadow: 0 0.17em 0 0 ${Color(style.color).darken(0.5)};
        `.trim();
    }
    static _borderRadius(style = {}) {
        if (style.borderRadius == undefined) {
            return '';
        }
        ;
        return `
        border-radius: ${style.borderRadius};
        `.trim();
    }
}
TagStyle.default = {
    color: 'blue',
    borderRadius: '4px'
};
