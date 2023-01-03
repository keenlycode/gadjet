import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor } from "../../style";

export interface BadgeStyleParam {
    color?: string;
}

export class BadgeStyle extends StyleClass {
    static readonly default: BadgeStyleParam = {
        color: "blue"
    }

    static css(style: BadgeStyleParam = {}): string {
        style = {...this.default, ...style};
        return `
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        line-height: initial;
        border-radius: 20em;
        padding-left: 0.2em;
        padding-right: 0.2em;
        min-width: 1.5em;
        min-height: 1.7em;
        ${this.style(style)}
        `.trim();
    }

    static style(style: BadgeStyleParam = {}): string {
        let css = `
        ${this._color(style)}
        `.trim();
        return css;
    }

    static _color(style: BadgeStyleParam = {}): string {
        if (style.color == undefined) { return '' };
        return bgColor(style.color);
    }
}