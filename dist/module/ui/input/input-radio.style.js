import { StyleClass } from "@nitipit/adapter/src/adapter";
var Color = require('color');
export class InputRadioStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let markDotColor = 'black';
        if (Color(style.activeColor).isDark()) {
            markDotColor = 'white';
        }
        const css = `
        position: relative;
        display: inline-block;
        font-size: 1em;
        user-select: none;
        width: 1.1em;
        height: 1.1em;
        input {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            opacity: 0;
            cursor: pointer;
            width: 1.1em;
            height: 1.1em;
            vertical-align: middle;
        }

        /* Create a custom radio button */
        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 1.1em;
            height: 1.1em;
            border-radius: 50%;
        }

        /* Create the indicator (the dot/circle - hidden when not checked) */
        span:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the indicator (dot/circle) when checked */
        input:checked ~ span:after {
            display: block;
        }

        /* Style the indicator (dot/circle) */
        span:after {
            top: 0.35em;
            left: 0.35em;
            width: 0.4em;
            height: 0.4em;
            border-radius: 50%;
            background-color: ${markDotColor};
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._color(style)}
        ${this._boxShadowColor(style)}
        ${this._activeColor(style)}
        `.trim();
        return css;
    }
    static _color(style = {}) {
        if (style.color == undefined) {
            return '';
        }
        ;
        return `
        span {
            background-color: ${style.color};
        }
        `.trim();
    }
    static _boxShadowColor(style = {}) {
        if (style.boxShadowColor == undefined) {
            return '';
        }
        ;
        return `
        span {
            box-shadow: 0 1px 1px 0 ${style.boxShadowColor};
        }`.trim();
    }
    static _activeColor(style = {}) {
        if (style.activeColor == undefined) {
            return '';
        }
        ;
        return `
        /* On mouse-over, add a background color */
        &:hover input ~ span {
            background-color: ${Color(style.activeColor).lighten(0.2).saturate(0.2)};
        }

        /* When the radio button is checked, add background color */
        input:checked ~ span {
            background-color: ${style.activeColor};
        }`.trim();
    }
}
InputRadioStyle.default = {
    color: '#ccc',
    boxShadowColor: '#777',
    activeColor: 'blue'
};
