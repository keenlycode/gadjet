import { StyleClass } from "@nitipit/adapter/src/adapter";

export interface InputRangeStyleParam {
    trackColor?: string;
    fillColor?: string;
    pinColor?: string;
    pinHoverColor?: string;
}

export class InputRangeStyle extends StyleClass {
    static readonly default = {
        trackColor: '#ccc',
        fillColor: 'blue',
        pinColor: '#ccc',
        pinHoverColor: 'blue'
    }

    static css(style: InputRangeStyleParam = {}) {
        style = { ...this.default, ...style };
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
            margin: 0;
        }

        input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 1.2em;
            height: 1.2em;
            border: 1px solid grey;
            border-radius: 50%;
            cursor: pointer;
            margin: 0;
            padding: 0;
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

    static style(style: InputRangeStyleParam = {}) {
        const css = `
        ${this._trackColor(style)}
        ${this._fillColor(style)}
        ${this._pinColor(style)}
        ${this._pinHoverColor(style)}
        `.trim();

        return css;
    }

    static _trackColor(style: InputRangeStyleParam = {}) {
        if (style.trackColor == undefined) { return '' };
        return `
        background-color: ${style.trackColor};
        `.trim();
    }

    static _fillColor(style: InputRangeStyleParam = {}) {
        if (style.fillColor == undefined) { return '' };
        return `
        div[el="fill"] {
            background-color: ${style.fillColor};
        }
        `.trim();
    }

    static _pinColor(style: InputRangeStyleParam = {}) {
        if (style.pinColor == undefined) { return '' };
        return `
        input[type="range"]::-webkit-slider-thumb {
            background-color: ${style.pinColor};
        }
        `.trim();
    }

    static _pinHoverColor(style: InputRangeStyleParam = {}) {
        if (style.pinHoverColor == undefined) { return '' };
        return `
        input[type="range"]::-webkit-slider-thumb:hover {
            background-color: ${style.pinHoverColor};
        }
        `.trim();
    }

}