import { StyleClass } from "@nitipit/adapter/src/adapter";
import { ButtonStyle } from "./button.style";
import { aspectRatio } from "../../style";

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
        ${aspectRatio('1/1')}
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