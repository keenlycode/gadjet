import { StyleClass } from "../ui";
export class InputRangeStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        const css = `
        display: inline-block;
        width: 200px;
        height: 0.25em;
        position: relative;
        border-radius: 0.25em;

        input[type="range"] {
            appearance: none;
            height: 0.25em;
            outline: none;
            padding: 0;
            border: none;
            width: 100%;
            background: transparent;
            position: absolute;
        }

        input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 1.2em;
            height: 1.2em;
            border: 1px solid grey;
            border-radius: 50%;
            cursor: pointer;
        }
        div[el="fill"] {
            position: absolute;
            height: 0.25em;
            width: 50%;
            border-radius: 0.25em;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._trackColor(style)}
        ${this._fillColor(style)}
        ${this._pinColor(style)}
        ${this._pinHoverColor(style)}
        `.trim();
        return css;
    }
    static _trackColor(style = {}) {
        if (style.trackColor == undefined) {
            return '';
        }
        ;
        return `
        background-color: ${style.trackColor};
        `.trim();
    }
    static _fillColor(style = {}) {
        if (style.fillColor == undefined) {
            return '';
        }
        ;
        return `
        div[el="fill"] {
            background-color: ${style.fillColor};
        }
        `.trim();
    }
    static _pinColor(style = {}) {
        if (style.pinColor == undefined) {
            return '';
        }
        ;
        return `
        input[type="range"]::-webkit-slider-thumb {
            background-color: ${style.pinColor};
        }
        `.trim();
    }
    static _pinHoverColor(style = {}) {
        if (style.pinHoverColor == undefined) {
            return '';
        }
        ;
        return `
        input[type="range"]::-webkit-slider-thumb:hover {
            background-color: ${style.pinHoverColor};
        }
        `.trim();
    }
}
InputRangeStyle.default = {
    trackColor: '#ccc',
    fillColor: 'blue',
    pinColor: '#ccc',
    pinHoverColor: 'blue'
};
