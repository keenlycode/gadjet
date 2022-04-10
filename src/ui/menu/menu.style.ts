import { StyleClass } from "../ui";
import { bgColor } from "../../style";
const Color = require('color');

export interface MenuStyleParam {
    hoverColor?: string;
    arrowColor?: string;
}

export class MenuStyle extends StyleClass {
    static readonly default: MenuStyleParam = {
        hoverColor: 'blue',
        arrowColor: 'blue'
    }

    static css(style: MenuStyleParam = {}) {
        style = {...this.default, ...style};
        const css = `
        display: block;
        padding: 0;
        margin: 0;
        border: 1px solid blue;
        border-radius: 0.2em;

        .arrow i {
            font-size: 1.2em;
            float: right;
            border-left: 0.25em solid transparent;
            border-right: 0.25em solid transparent;
            will-change: transform;
            transform: rotateZ(90deg);
            transition: transform 0.2s;
        }

        ul {
            margin: 0;
            padding-left: 1em;
            transition: height 0.2s;
            will-change: transition;
        }

        > ul {
            padding-left: 0;
        }

        li {
            list-style: none;
            display: block;
            overflow-y: hidden;
            overflow-x: hidden;
        }

        a {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 0.5em 1em;
            div.content {
                width: 100%;
            }
            div.arrow {
                min-width: 1em;
            }
        }

        a ~ ul {
            height: 0;
        }

        a.show {
            .arrow i {
                transform: rotateZ(180deg);
            }
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: MenuStyleParam = {}): string {
        const css = `
        ${this._hoverColor(style)}
        ${this._arrowColor(style)}
        `.trim();
        return css;
    }

    static _hoverColor(style: MenuStyleParam = {}): string {
        if (style.hoverColor == undefined) { return '' };
        let arrowColor = 'black';
        if (Color(style.hoverColor).isDark()) {
            arrowColor = 'white';
        }
        return `
        a {
            -webkit-tap-highlight-color: ${Color(style.hoverColor)};
        }
        a:hover {
            ${bgColor(style.hoverColor)};
            .arrow i {
                border-bottom-color: ${arrowColor};
            }
        }
        `.trim();
    }
    static _arrowColor(style: MenuStyleParam = {}): string {
        if (style.arrowColor == undefined) { return '' };
        return `
        .arrow i {
            border-bottom: 0.25em solid ${style.arrowColor};
        }
        `.trim();
    }
}