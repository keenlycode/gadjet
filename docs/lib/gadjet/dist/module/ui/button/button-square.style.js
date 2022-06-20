import { StyleClass } from "../ui";
import { ButtonStyle } from "./button.style";
export class ButtonSquareStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
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
    static style(style = {}) {
        let css = `
        ${ButtonStyle.style(style)}
        `.trim();
        return css;
    }
}
ButtonSquareStyle.default = {
    color: 'blue',
    borderRadius: '4px'
};
