import Color from 'color'
import { StyleClass } from "@nitipit/adapter/src/adapter";
import { aspectRatio, bgColor, bgColorInt } from "../../style";

export interface MenuStyleParam {
    bgColor?: string;
    barBgColor?: string;
}

export class MenuStyle extends StyleClass {
    static readonly default: MenuStyleParam = {
        bgColor: '#3584e4',
        barBgColor: '#f6f5f4'
    }

    static css(style: MenuStyleParam = {}) {
        style = {...this.default, ...style};
        let color = "black";
        let barColor = "black";
        if (new Color(style.bgColor).isDark()) {
            color = "white";
        }
        if (new Color(style.barBgColor).isDark()) {
            barColor = "white";
        }
        const css = `
        display: block;
        padding: 0;
        margin: 0;
        border: 1px solid blue;
        border-radius: 0.5em;
        overflow: hidden;
        ${bgColor(style.bgColor)}
        ul {
            margin: 0;
            margin-left: 1.25rem;
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
            background: ${bgColorInt({color: style.bgColor})};
        }

        a:hover {
            background: ${bgColorInt({color: style.bgColor})};
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
                .dot {
                    display: flex;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 3em;
                    width: 100%;
                    ${bgColor(style.barBgColor)}
                    ${aspectRatio("1")}
                    > div {
                        width: 0.4em;
                        height: 0.4em;
                        border-radius: 50%;
                        background: ${barColor};
                    }
                }
                .arrow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 3em;
                    width: 100%;
                    cursor: pointer;
                    ${bgColorInt({color: style.barBgColor})}
                    ${aspectRatio("1")}
                    i {
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