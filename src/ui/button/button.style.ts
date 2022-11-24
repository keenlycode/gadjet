import { bgColorInt, lift } from '../../style';
import { StyleClass } from '../../adapter';

export interface ButtonStyleParam {
    color?: string;
    borderRadius?: string;
}

export class ButtonStyle extends StyleClass {
    static readonly default: ButtonStyleParam = {
        color: "blue",
        borderRadius: "4px"
    }

    static css(style: ButtonStyleParam = {}): string {
        style = {...this.default, ...style};
        return `
        border: 0;
        font-size: 1em;
        line-height: 1;
        font-weight: bold;
        text-decoration: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2em;
        padding-left: 0.4em;
        padding-right: 0.4em;
        cursor: pointer;
        transition: 0.2s;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        &[disabled]:hover {
            cursor: not-allowed;
        }
        a {
            text-decoration: none;
        }
        ${lift({ level: 1 })}
        &:hover {
            ${lift({ level: 2 })};
        }
        &:active {
            ${lift({ level: 1 })};
        }
        ${this.style(style)}
        `.trim();
    }

    static style(style: ButtonStyleParam = {}): string {
        return `
        ${this._color(style)}
        ${this._borderRadius(style)}
        `.trim();
    }

    static _color(style: ButtonStyleParam = {}): string {
        if (style.color == undefined) { return '' };
        let css = `
        ${bgColorInt({color: style.color})}
        `.trim();

        return css;
    }

    static _borderRadius(style: ButtonStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
        let css = `
        border-radius: ${style.borderRadius};
        `.trim();

        return css;
    }
}