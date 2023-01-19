import { StyleClass } from "@nitipit/adapter/src/adapter";
import { bgColor } from "../../style";


export interface BoxArrowStyleParam {
    arrow?: string,
    arrowSize?: string,
    position?: string,
    bgColor?: string,
    borderStyle?: string;
    borderWidth?: string,
    borderColor?: string,
    borderRadius?: string
}

export class BoxArrowStyle extends StyleClass {
    static readonly default: BoxArrowStyleParam = {
        arrow: 'top',
        arrowSize: '8px',
        position: '50%',
        bgColor: '#ccc',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '4px'
    }

    static css(style: BoxArrowStyleParam = {}): string {
        style = {...this.default, ...style};
        let css = `
        display: inline-block;
        position: relative;

        div[el="box"] {
            position: relative;
            background: inherit;
            z-index: 1;
        }

        div[el="arrows"] {
            background: inherit;
        }

        div[el="arrow-top"] {
            position: absolute;
            top: 0;
            background: inherit;
            transform: translate(-50%, -50%) rotate(45deg);
        }

        div[el="arrow-right"] {
            position: absolute;
            right: 0;
            background: inherit;
            transform: translate(50%, -50%) rotate(135deg);
        }

        div[el="arrow-bottom"] {
            position: absolute;
            bottom: 0;
            background: inherit;
            transform: translate(50%, 50%) rotate(225deg);
        }

        div[el="arrow-left"] {
            position: absolute;
            left: 0;
            background: inherit;
            transform: translate(-50%, 50%) rotate(315deg);
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: BoxArrowStyleParam = {}): string {
        let css = `
        ${this._arrow(style)}
        ${this._arrowSize(style)}
        ${this._position(style)}
        ${this._bgColor(style)}
        ${this._borderWidth(style)}
        ${this._borderStyle(style)}
        ${this._borderColor(style)}
        ${this._borderRadius(style)}

        `.trim();

        return css;
    }

    static _arrow(style: BoxArrowStyleParam = {}): string {
        if (style.arrow == undefined) { return '' }
        let css = `
        div[el^="arrow-"] {
            display: none;
        }
        div[el="arrow-${style.arrow}"] {
            display: block;
        }
        `.trim();

        return css;
    }

    static _arrowSize(style: BoxArrowStyleParam = {}): string {
        if (style.arrowSize == undefined) { return '' }
        let css = `
        div[el^="arrow-"] {
            width: ${style.arrowSize};
            height: ${style.arrowSize};
        }
        `.trim();

        return css;
    }

    static _position(style: BoxArrowStyleParam = {}): string {
        if (style.position == undefined) { return '' }
        let css = `
        div[el="arrow-top"] {
            left: ${style.position};
        }
        div[el="arrow-right"] {
            top: ${style.position};
        }
        div[el="arrow-bottom"] {
            right: ${style.position};
        }
        div[el="arrow-left"] {
            bottom: ${style.position};
        }
        `.trim();

        return css;
    }

    static _bgColor(style: BoxArrowStyleParam = {}): string {
        if (style.bgColor == undefined) { return '' }
        let css = `
        ${bgColor(style.bgColor)}
        `.trim();

        return css;
    }

    static _borderWidth(style: BoxArrowStyleParam = {}): string {
        if (style.borderWidth == undefined) { return '' }
        let css = `
        border-width: ${style.borderWidth};
        div[el^="arrow-"] {
            border-width: ${style.borderWidth}
        }
        `.trim();

        return css;
    }

    static _borderStyle(style: BoxArrowStyleParam = {}): string {
        if (style.borderStyle == undefined) { return '' }
        let css = `
        border-style: ${style.borderStyle};
        div[el^="arrow-"] {
            border-style: ${style.borderStyle}
        }
        `.trim();

        return css;
    }

    static _borderColor(style: BoxArrowStyleParam = {}): string {
        if (style.borderColor == undefined) { return '' }
        let css = `
        border-color: ${style.borderColor};
        div[el^="arrow-"] {
            border-color: ${style.borderColor};
            border-bottom-color: transparent;
            border-right-color: transparent;
        }
        `.trim();

        return css;
    }

    static _borderRadius(style: BoxArrowStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' }
        let css = `
        border-radius: ${style.borderRadius};
        div[el="box"] {
            border-radius: ${style.borderRadius};
        }
        `.trim();

        return css;
    }
}