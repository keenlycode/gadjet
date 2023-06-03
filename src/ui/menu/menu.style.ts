import { StyleClass } from "@nitipit/adapter/src/adapter";
import { aspectRatio, bgColor } from "../../style";
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

        ul {
            margin: 0;
            margin-left: 1rem;
            width: 100%;
            padding: 0;
            box-sizing: border-box;
            border-left: 1px dashed;
            transition: height 0.2s;
            will-change: transition;
        }

        > ul {
            padding-left: 0;
            margin-left: 0;
            border-left: 0;
            height: auto;
        }

        li.show > div.item > .arrow i {
            transform: rotateZ(45deg);
        }

        li {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            box-sizing: border-box;
            overflow-y: hidden;
            overflow-x: hidden;
            div.item {
                display: flex;
                width: 100%;
                ~ ul {
                    height: 0;
                }
                a {
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    padding-left: 0.75rem;
                    width: 100%;
                    height: 3em;
                }
                .arrow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 3.5em;
                    cursor: pointer;
                    ${aspectRatio("1")}
                    i {
                        border: solid ${style.arrowColor};
                        border-width: 0 3px 3px 0;
                        display: inline-block;
                        padding: 3px;
                        transition: transform 0.2s;
                        transform: rotate(-45deg);
                    }
                }
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