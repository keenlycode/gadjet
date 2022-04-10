import { StyleClass } from "../ui";
import { ButtonStyle } from "./button.style";

export interface ButtonSquareStyleParam {
    color?: string;
    borderRadius?: string;
}

export class ButtonSquareStyle extends StyleClass {
    static readonly default: ButtonSquareStyleParam = {
        color: 'blue',
        borderRadius: '4px'
    }

    static css(style: ButtonSquareStyleParam = {}): string {
        style = { ...this.default, ...style };
        let css = `
        ${ButtonStyle.css(style)}
        user-select: none;
        min-width: 2em;
        max-width: 2em;
        min-height: 2em;
        max-height: 2em;
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: ButtonSquareStyleParam = {}): string {
        let css = `
        ${ButtonStyle.style(style)}
        `.trim();

        return css;
    }
}