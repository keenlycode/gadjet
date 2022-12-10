import { TagStyle } from "./tag.style";
import { bgColorInt } from "../../style";
const Color = require('color');


export interface TagXStyleParam {
    color?: string;
    borderRadius?: string;
}

export class TagXStyle extends TagStyle {
    static default: TagXStyleParam = {
        color: 'blue',
        borderRadius: '4px'
    }

    static css(style: TagXStyleParam = {}): string {
        style = { ...this.default, ...style };
        let css = `
        ${super.css(style)}
        padding-right: 0;
        [el="remove"] {
            margin-left: 0.3em;
            padding-left: 0.4em;
            padding-right: 0.5em;
            font-weight: bold;
            border-left: 1px solid;
            cursor: pointer;
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: TagXStyleParam = {}): string {
        let css = `
        ${this._color(style)}
        ${this._borderRadius(style)}
        `.trim();
        return css;
    }

    static _color(style: TagXStyleParam = {}): string {
        if (style.color == undefined) { return '' };
        return `
        ${bgColorInt({ color: style.color })}
        box-shadow: 0 0.17em 0 0 ${Color(style.color).darken(0.5)};
        `.trim();
    }

    static _borderRadius(style: TagXStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
        return super._borderRadius(style);
    }
}