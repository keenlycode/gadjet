import { StyleClass } from "../ui";
import { bgColor, lift } from "../../style";

export interface TabStyleParam {
    tabColor?: string;
    hoverColor?: string;
    activeColor?: string;
    separatorLineColor?: string;
    separatorLineWidth?: string;
}

export class TabStyle extends StyleClass {
    static readonly default: TabStyleParam = {
        tabColor: '#ccc',
        hoverColor: '#ddd',
        activeColor: 'blue',
        separatorLineColor: 'black',
        separatorLineWidth: '1px',
    }

    static css(style: TabStyleParam = {}): string {
        style = { ...this.default, ...style };
        const css = `
        display: inline-flex;
        flex-wrap: wrap;
        overflow: hidden;
        border-radius: 4px;
        > div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 0.25em 0.5em 0.25em 0.5em;
            line-height: 1;
            height: 1.8em;
        }
        > div:not(:last-of-type) {
            border-right-style: solid;
        }
        > div.active {
            ${lift({level: 2})}
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: TabStyleParam = {}): string {
        const css = `
        ${this._tabColor(style)}
        ${this._hoverColor(style)}
        ${this._activeColor(style)}
        ${this._separatorLineColor(style)}
        ${this._separatorLineWidth(style)}
        `.trim();
        return css;
    }

    static _tabColor(style: TabStyleParam = {}): string {
        if (style.tabColor == undefined) { return '' };
        return `
        ${bgColor(style.tabColor)}
        `.trim();
    }

    static _hoverColor(style: TabStyleParam = {}): string {
        if (style.hoverColor == undefined) { return '' };
        return `
        > div:hover {
            ${bgColor(style.hoverColor)}
        }`.trim();
    }

    static _activeColor(style: TabStyleParam = {}): string {
        if (style.activeColor == undefined) { return '' };
        return `
        > div.active {
            ${bgColor(style.activeColor)}
        }`.trim();
    }

    static _separatorLineColor(style: TabStyleParam = {}): string {
        if (style.separatorLineColor == undefined) { return '' };
        return `
        border-color: ${style.separatorLineColor};
        > div:not(:last-of-type) {
            border-right-color: ${style.separatorLineColor};
        }`.trim();
    }

    static _separatorLineWidth(style: TabStyleParam = {}): string {
        if (style.separatorLineWidth == undefined) { return '' };
        return `
        border-width: ${style.separatorLineWidth};
        > div:not(:last-of-type) {
            border-right-width: ${style.separatorLineWidth};
        }`.trim();
    }
}