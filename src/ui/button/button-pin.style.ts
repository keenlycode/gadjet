import { StyleClass } from "../ui";
import { ButtonStyle } from "./button.style";

export interface ButtonPinStyleParam {
    color?: string;
}

export class ButtonPinStyle extends StyleClass {
    static readonly default: ButtonPinStyleParam = {
        color: 'blue',
    }

    static css(style: ButtonPinStyleParam = {}): string {
        style = { ...this.default, ...style };
        let css = `
        ${ButtonStyle.css(style)}
        user-select: none;
        border-radius: 50%;
        min-width: 2em;
        min-height: 2em;
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: ButtonPinStyleParam = {}): string {
        if (style.color == undefined) { return '' };
        let css = `
        ${ButtonStyle.style(style)}
        border-radius: 50%;
        `.trim()

        return css;
    }
}