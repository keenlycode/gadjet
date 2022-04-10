import { bgColor } from "../../style";
import { StyleClass } from '../ui';
export class BadgeStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        return `
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        line-height: initial;
        border-radius: 20em;
        padding: 0.2em;
        min-width: 1.6em;
        min-height: 1.6em;
        ${this.style(style)}
        `.trim();
    }
    static style(style = {}) {
        let css = `
        ${this._color(style)}
        `.trim();
        return css;
    }
    static _color(style = {}) {
        if (style.color == undefined) {
            return '';
        }
        ;
        return bgColor(style.color);
    }
}
BadgeStyle.default = {
    color: "blue"
};
