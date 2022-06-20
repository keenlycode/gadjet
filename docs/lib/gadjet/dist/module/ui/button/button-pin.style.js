import { StyleClass } from "../ui";
import { ButtonStyle } from "./button.style";
export class ButtonPinStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
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
    static style(style = {}) {
        if (style.color == undefined) {
            return '';
        }
        ;
        let css = `
        ${ButtonStyle.style(style)}
        border-radius: 50%;
        `.trim();
        return css;
    }
}
ButtonPinStyle.default = {
    color: 'blue',
};
