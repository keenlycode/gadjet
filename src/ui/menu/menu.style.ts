import Color from 'color'
import { StyleClass } from "@nitipit/adapter/src/adapter";
import { aspectRatio, bgColor, bgColorInt, BGColorIntParam } from "../../style";

export interface MenuStyleParam {
    bgColor?: BGColorIntParam | string;
    barBgColor?: BGColorIntParam | string;
}

export class MenuStyle extends StyleClass {
    static readonly default: MenuStyleParam = {
        bgColor: { color: "#3584e4" },
        barBgColor: { color: "#f6f5f4" }
    }

    static css(style: MenuStyleParam = {}) {
        if (typeof(style.bgColor) === "string") {
            style.bgColor = { color: style.bgColor };
        }
        if (typeof(style.barBgColor) === "string") {
            style.barBgColor = { color: style.barBgColor };
        }

        style = {...this.default, ...style};

        style.bgColor = style.bgColor as BGColorIntParam;
        style.barBgColor = style.barBgColor as BGColorIntParam;

        const css = `
        display: block;
        padding: 0;
        margin: 0;
        border: 1px solid blue;
        border-radius: 0.5em;
        overflow: hidden;

        .barButton {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 3em;
            width: 100%;
            ${aspectRatio("1")}
        }

        a {
            min-height: 3em;
        }

        &.flat {
            .barButton {
                display: none;
            }
        }

        ul {
            margin: 0;
            margin-left: 0.8em;
            width: 100%;
            padding: 0;
            box-sizing: border-box;
            border-left: 1px dashed;
            transition: height 200ms;
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

        li > ul {
            height: 0;
        }

        li.show > ul {
            height: auto;
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
                a {
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    padding-left: 0.7rem;
                    width: 100%;
                    color: inherit;
                }
                .barButton {
                }
                .dot {
                    > div {
                        width: 0.4em;
                        height: 0.4em;
                        border-radius: 50%;
                    }
                }
                .arrow {
                    cursor: pointer;
                    > i {
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
        ${this._bgColor(style)}
        ${this._barBgColor(style)}
        `.trim();
        return css;
    }

    static _bgColor(style: MenuStyleParam = {}): string {
        if (style.bgColor == undefined) { return '' };
        if (typeof(style.bgColor) === "string") {
            style.bgColor = { color: style.bgColor };
        }

        const bgColorActive = new Color(style.bgColor.color)
            .lighten(style.bgColor.lighten)
            .saturate(style.bgColor.saturate)

        return `
        ${bgColor(style.bgColor.color)}
        a {
            ${bgColorInt(style.bgColor)}
        }
        a.selected {
            background: ${bgColorActive};
        }
        `.trim();
    }

    static _barBgColor(style: MenuStyleParam = {}): string {
        if (style.barBgColor == undefined) { return '' };
        if (typeof(style.barBgColor) === "string") {
            style.barBgColor = { color: style.barBgColor };
        }
        let barColor = "black";
        if (new Color(style.barBgColor.color).isDark()) {
            barColor = "white";
        }
        return `
        .dot {
            ${bgColor(style.barBgColor.color)}
            > div {
                background: ${barColor};
            }
        }
        .arrow {
            ${bgColorInt(style.barBgColor)}
            > i {
                border: solid ${barColor};
        }
        `.trim();
    }
}