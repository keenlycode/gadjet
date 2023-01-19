import { StyleClass } from "@nitipit/adapter/src/adapter";
const Color = require('color');


export interface CheckboxStyleParam {
    bgColor?: string;
    activeColor?: string;
}

export class CheckboxStyle extends StyleClass {
    static default: CheckboxStyleParam = {
        bgColor: '#ccc',
        activeColor: 'blue'
    }
    static css(style: CheckboxStyleParam = {}): string {
        style = { ...this.default, ...style };
        let css = `
        position: relative;
        width: 1em;
        height: 1em;
        user-select: none;
        display: inline-block;

        /* Hide the browser's default checkbox */
        input {
            opacity: 0;
            cursor: pointer;
            width: 1em;
            height: 1em;
            margin: 0;
            position: absolute;
            top: 1;
            left: 0;
            z-index: 1;
        }

        /* Create a custom checkbox */
        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 1em;
            height: 1em;
            box-shadow: 0 1px 1px 0 grey;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        span:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        input:checked ~ span:after {
            display: block;
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: CheckboxStyleParam = {}): string {
        let css = `
        ${this._bgColor(style)}
        ${this._activeColor(style)}
        `.trim();
        
        return css;
    }

    static _bgColor(style: CheckboxStyleParam = {}): string {
        if (style.bgColor == undefined) { return '' };
        return `
        span {
            background-color: ${style.bgColor};
        }
        `.trim();
    }

    static _activeColor(style: CheckboxStyleParam = {}): string {
        if (style.activeColor == undefined) { return '' };

        let markColor = 'black';
        if (Color(style.activeColor).isDark()) {
            markColor = 'white';
        }

        return `
        /* Style the checkmark/indicator */
        span:after {
            border: solid ${markColor};
            left: 0.25em;
            width: 0.3em;
            height: 0.6em;
            border-width: 0 0.2em 0.2em 0;
            transform: rotate(45deg);
        }

        /* When the checkbox is checked, add background color */
        input:checked ~ span {
            background-color: ${style.activeColor};
        }

        /* On mouse-over, add background color */
        &:hover input ~ span {
            background-color: ${Color(style.activeColor).lighten(0.2)}
        }
        `.trim();
    }
}