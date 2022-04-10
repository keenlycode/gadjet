import { StyleClass } from "../ui";
import { InputNumberStyle } from "./input-number.style";
export class InputNumberCenterStyle extends StyleClass {
    static css(style = {}) {
        const css = `
        ${InputNumberStyle.css()}
        input[type="number"] {
            border-radius: 0;
        }
        button[el="up"] {
            z-index: 1;
        }
        button[el="down"] {
            border-radius: 0.2em 0 0 0.2em;
            z-index: 1;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${InputNumberStyle.style(style)}
        `.trim();
        return css;
    }
    static _color(style = {}) {
        const css = `
        ${InputNumberStyle._color(style)}
        `.trim();
        return css;
    }
}
