import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor } from '../../style/bg-color';


export interface OverlayStyleParam {
    bgColor?: string;
    opacity?: string;
};

export class OverlayStyle extends StyleClass {
    static readonly default: OverlayStyleParam = {
        bgColor: 'black',
        opacity: '0.7'
    }

    static css(style: OverlayStyleParam = {}): string {
        style = {...this.default, ...style};
        let css = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
        `.trim();
        return css;
    }

    static style(style: OverlayStyleParam = {}): string {
        let css = `
            ${this._bgColor(style)}
            ${this._opacity(style)}
        `.trim();
        return css;
    }

    static _bgColor(style: OverlayStyleParam = {}): string {
        if (style.bgColor == undefined) { return '' };
        return `
            ${bgColor(style.bgColor)}
        `.trim();
    }

    static _opacity(style: OverlayStyleParam = {}): string {
        if (style.opacity == undefined) { return '' };
        return `
            opacity: ${style.opacity};
        `.trim();
    }
}