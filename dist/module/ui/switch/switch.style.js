import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor, lift } from "../../style";
export class SwitchStyleParam {
}
export class SwitchStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        const css = `
        display: inline-flex;
        font-weight: bold;
        line-height: initial;
        width: 3.8em;
        height: 2em;
        align-items: center;
        position: relative;

        input[type="checkbox"] {
            /* Hide default HTML checkbox */
            position: absolute;
            opacity: 0;
            cursor: pointer;
            z-index: 10;
            width: 100%;
            height: 100%;
            margin: 0;
        }

        div[el="label"] {
            display: flex;
            width: 100%;
            height: 100%;
            ${lift({ level: 1 })}
            overflow: hidden;
            transition: .4s;
            align-items: center;
            text-align: center;
            padding-left: 0.2em;
            padding-right: 0.2em;
        }

        div[el="pin"] {
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 0.1em;
            transform: translateY(-50%);
            text-align: center;
            width: 1.8em;
            height: 1.8em;
            border: 1px solid #9a9996;
            transition: .2s;
        }

        div[el="label"] > span {
            font-size: 0.8em;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
        }

        input[type="checkbox"]:checked ~ div[el="pin"] {
            transform: translate(1.8em, -50%);
            will-change: transform;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._pinColor(style)}
        ${this._pinRadius(style)}
        ${this._bgColor(style)}
        ${this._activeColor(style)}
        `.trim();
        return css;
    }
    static _pinColor(style = {}) {
        if (style.pinColor == undefined) {
            return '';
        }
        ;
        return `
        div[el="pin"] {
            ${bgColor(style.pinColor)}
        }
        `.trim();
    }
    static _pinRadius(style = {}) {
        return `
        div[el="pin"] {
            border-radius: ${style.pinRadius}
        }
        div[el="label"] {
            border-radius: ${style.pinRadius}
        }
        `;
    }
    static _bgColor(style = {}) {
        if (style.bgColor == undefined) {
            return '';
        }
        ;
        return `
        div[el="label"] {
            ${bgColor(style.bgColor)}
        }
        `.trim();
    }
    static _activeColor(style = {}) {
        if (style.activeColor == undefined) {
            return '';
        }
        ;
        return `
        input[type="checkbox"]:checked ~ div[el="label"] {
            ${bgColor(style.activeColor)}
        }
        `.trim();
    }
}
SwitchStyle.default = {
    pinColor: '#f6f5f4',
    pinRadius: '10em',
    bgColor: '#deddda',
    activeColor: 'blue'
};
