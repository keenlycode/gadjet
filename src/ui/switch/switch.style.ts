import { bgColor, lift } from "../../style";
import { StyleClass } from "../ui";

export class SwitchStyleParam {
    pinColor?: string;
    bgColor?: string;
    activeColor?: string;
}


export class SwitchStyle extends StyleClass {
    static default = {
        pinColor: '#f6f5f4',
        bgColor: '#deddda',
        activeColor: 'blue'
    }
    static css(style: SwitchStyleParam = {}): string {
        style = {...this.default, ...style};

        const css = `
        display: inline-flex;
        font-weight: bold;
        line-height: initial;
        width: 4.5em;
        height: 1.5em;
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

        div[el="label"] > span {
            font-size: 0.8em;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
        }

        input[type="checkbox"]:checked ~ div[el="pin"] {
            transform: translate(101%, -50%);
            will-change: transform;
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: SwitchStyleParam = {}): string {
        const css = `
        div[el="label"] {
            display: flex;
            width: 100%;
            height: 100%;
            border-radius: 0.2em;
            ${lift({ level: 1 })}
            transition: .4s;
            align-items: center;
            text-align: center;
        }
        div[el="pin"] {
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            text-align: center;
            width: 50%;
            height: 101%;
            border: 1px solid #9a9996;
            border-radius: 0.2em;
            transition: .2s;
        }
        ${this._pinColor(style)}
        ${this._bgColor(style)}
        ${this._activeColor(style)}
        `.trim();

        return css;
    }

    static _pinColor(style: SwitchStyleParam = {}): string {
        if (style.pinColor == undefined) { return '' };
        return `
        div[el="pin"] {
            ${bgColor(style.pinColor)}
        }
        `.trim();
    }

    static _bgColor(style: SwitchStyleParam = {}): string {
        if (style.bgColor == undefined) { return '' };
        return `
        div[el="label"] {
            ${bgColor(style.bgColor)}
        }
        `.trim();
    }

    static _activeColor(style: SwitchStyleParam = {}): string {
        if (style.activeColor == undefined) { return '' };
        return `
        input[type="checkbox"]:checked ~ div[el="label"] {
            ${bgColor(style.activeColor)}
        }
        `.trim();
    }
}