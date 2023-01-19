import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor } from '../../style';
import { ButtonStyle } from '../button/button.style';
const Color = require('color');
export class InputRadioButtonStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        const css = `
        display: inline-block;
        position: relative;
        font-size: 1em;
        user-select: none;
        input[type="radio"] {
            position: absolute;
            opacity: 0;
            left: 0;
            top: 0;
            cursor: pointer;
            margin: 0;
            width: 100%;
            height: 100%;
        }

        button {
            ${ButtonStyle.css()}
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._activeColor(style)}
        ${this._buttonColor(style)}
        `.trim();
        return css;
    }
    static _activeColor(style = {}) {
        if (style.activeColor == undefined) {
            return '';
        }
        return `
        &:hover input[type="radio"] ~ button {
            ${bgColor(Color(style.activeColor).lighten(0.2).saturate(0.2))}
        }

        /* When the radio button is checked, add background color */
        input[type="radio"]:checked ~ button {
            ${bgColor(style.activeColor)}
        }
        `.trim();
    }
    static _buttonColor(style = {}) {
        if (style.buttonColor == undefined) {
            return '';
        }
        ;
        return `
        button {
            ${bgColor(style.buttonColor)}
        }`.trim();
    }
}
InputRadioButtonStyle.default = {
    activeColor: 'blue',
    buttonColor: '#ccc'
};
export class InputRadioButtonGroupStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
        display: inline-flex;
        button {
            border-radius: 0;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        if (style.borderRadius == undefined) {
            return '';
        }
        ;
        let css = `
        > *:first-of-type {
            button {
                border-radius: ${style.borderRadius} 0 0 ${style.borderRadius};
            }
        }
        > *:last-of-type {
            button {
                border-radius: 0 ${style.borderRadius} ${style.borderRadius} 0;
            }
        }
        `.trim();
        return css;
    }
}
InputRadioButtonGroupStyle.default = {
    borderRadius: '4px'
};
