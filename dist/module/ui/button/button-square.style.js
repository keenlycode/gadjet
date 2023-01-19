import { StyleClass } from "@nitipit/adapter/src/adapter";
import { ButtonStyle } from "./button.style";
import { aspectRatio } from "../../style";
export class ButtonSquareStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
        ${ButtonStyle.css(style)}
        user-select: none;
        ${aspectRatio('1/1')}
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
