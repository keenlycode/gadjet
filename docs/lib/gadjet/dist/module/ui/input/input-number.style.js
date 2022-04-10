import { StyleClass } from "../ui";
import { InputStyle } from './input.style';
import { ButtonSquareStyle } from "../button/button-square.style";
export class InputNumberStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        const css = `
        display: inline-flex;
        height: 2em;
        min-width: 7em;
        input[type="number"] {
            ${InputStyle.css()}
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
            -moz-appearance: textfield;
            text-align: center;
            width: 4em;
            border-radius: 0.2em 0 0 0.2em;
        }
        button[el="down"] {
            ${ButtonSquareStyle.css({ color: style.color })}
            border-radius: 0;
            width: 2em;
        }
        button[el="up"] {
            ${ButtonSquareStyle.css({ color: style.color })}
            border-radius: 0 4px 4px 0;
            width: 2em;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._color(style)}
        `.trim();
        return css;
    }
    static _color(style = {}) {
        if (style.color == undefined) {
            return '';
        }
        ;
        return `
        button[el="down"] {
            ${ButtonSquareStyle.style({ color: style.color })}
        }
        button[el="up"] {
            ${ButtonSquareStyle.style({ color: style.color })}
        }
        `.trim();
    }
}
InputNumberStyle.default = {
    color: 'blue'
};
