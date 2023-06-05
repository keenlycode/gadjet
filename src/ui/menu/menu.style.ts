import Color from 'color'
import { StyleClass } from "@nitipit/adapter/src/adapter";
import { aspectRatio, bgColor, bgColorInt, bgColorIntParam } from "../../style";

export interface MenuStyleParam {
    bgColor?: bgColorIntParam;
    barBgColor?: bgColorIntParam;
}

export class MenuStyle extends StyleClass {
    static readonly default: MenuStyleParam = {
        bgColor: {
            color: "#3584e4",
            lighten: 0.2,
            saturate: 0.2,
        },
        barBgColor: {
            color: "#f6f5f4",
            lighten: 0.2,
            saturate: 0.2,
        }
    }

    static css(style: MenuStyleParam = {}) {
        style = {...this.default, ...style};
        let barColor = "black";
        if (new Color(style.barBgColor.color).isDark()) {
            barColor = "white";
        }
        const bgColorActive = new Color(style.bgColor.color)
            .lighten(style.bgColor.lighten)
            .saturate(style.bgColor.saturate)
        const css = `
        display: block;
        padding: 0;
        margin: 0;
        border: 1px solid blue;
        border-radius: 0.5em;
        overflow: hidden;
        ${bgColor(style.bgColor.color)}
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

        a.selected {
            background: ${bgColorActive};
        }

        a {
            ${bgColorInt(style.bgColor)}
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
                    display: flex;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 3em;
                    width: 100%;
                    ${aspectRatio("1")}
                }
                .dot {
                    ${bgColor(style.barBgColor.color)}
                    > div {
                        width: 0.4em;
                        height: 0.4em;
                        border-radius: 50%;
                        background: ${barColor};
                    }
                }
                .arrow {
                    cursor: pointer;
                    ${bgColorInt(style.barBgColor)}
                    > i {
                        border: solid ${barColor};
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
        // const css = `
        // ${this._hoverColor(style)}
        // ${this._arrowColor(style)}
        // `.trim();
        // return css;
        // continue
        return '';
    }

    // static _hoverColor(style: MenuStyleParam = {}): string {
    //     if (style.hoverColor == undefined) { return '' };
    //     let arrowColor = 'black';
    //     if (Color(style.hoverColor).isDark()) {
    //         arrowColor = 'white';
    //     }
    //     return `
    //     a {
    //         -webkit-tap-highlight-color: ${Color(style.hoverColor)};
    //     }
    //     a:hover {
    //         ${bgColor(style.hoverColor)};
    //     }
    //     `.trim();
    // }
    // static _arrowColor(style: MenuStyleParam = {}): string {
    //     if (style.arrowColor == undefined) { return '' };
    //     return `
    //     .arrow i {
    //         border-bottom: 0.25em solid ${style.arrowColor};
    //     }
    //     `.trim();
    // }
}