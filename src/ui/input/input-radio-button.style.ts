import { StyleClass } from "../../adapter";
import { bgColor } from '../../style';
import { ButtonStyle } from '../button/button.style';
const Color = require('color');

export interface InputRadioButtonStyleParam {
    activeColor?: string;
    buttonColor?: string;
}


export class InputRadioButtonStyle extends StyleClass {
    static readonly default: InputRadioButtonStyleParam = {
        activeColor: 'blue',
        buttonColor: '#ccc'
    }
    static css(style: InputRadioButtonStyleParam = {}) {
        style = {...this.default, ...style};
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

    static style(style: InputRadioButtonStyleParam = {}): string {
        const css = `
        ${this._activeColor(style)}
        ${this._buttonColor(style)}
        `.trim();
        return css;
    }

    static _activeColor(style: InputRadioButtonStyleParam = {}): string {
        if (style.activeColor == undefined) { return '' }
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

    static _buttonColor(style: InputRadioButtonStyleParam = {}): string {
        if (style.buttonColor == undefined) { return '' };
        return `
        button {
            ${bgColor(style.buttonColor)}
        }`.trim();
    }
}

export interface ButtonGroupStyleParam {
    borderRadius?: string;
}

export class InputRadioButtonGroupStyle extends StyleClass {
    static readonly default: ButtonGroupStyleParam = {
        borderRadius: '4px'
    }

    static css(style: ButtonGroupStyleParam = {}): string {
        style = { ...this.default, ...style };
        let css = `
        display: inline-flex;
        button {
            border-radius: 0;
        }
        ${this.style(style)}
        `.trim()

        return css;
    }

    static style(style: ButtonGroupStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
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
        `.trim()

        return css;
    }
}