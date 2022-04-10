const Color = require('color');
import { bgColor } from "../../style";
import { StyleClass } from "../ui";


export class TagStyleParam {
    color?: string;
    borderRadius?: string;
}

export class TagStyle extends StyleClass {
    static readonly default: TagStyleParam = {
        color: 'blue',
        borderRadius: '4px'
    }

    static css(style: TagStyleParam = {}): string {
        style = {...this.default, ...style};

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

    static style(style: TagStyleParam = {}): string {
        let css = `
        ${this._color(style)}
        ${this._borderRadius(style)}
        `.trim();

        return css;
    }

    static _color(style: TagStyleParam = {}): string {
        if (style.color == undefined) { return '' };
        return `
        ${bgColor(style.color)}
        box-shadow: 0 0.17em 0 0 ${Color(style.color).darken(0.5)};
        `.trim();
    }

    static _borderRadius(style: TagStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
        return `
        border-radius: ${style.borderRadius};
        `.trim();
    }
}

