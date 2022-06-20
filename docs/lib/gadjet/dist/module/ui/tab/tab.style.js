import { StyleClass } from "../ui";
import { bgColor, lift } from "../../style";
export class TabStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
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
        }
        > div:not(:last-of-type) {
            border-right-style: solid;
        }
        > div.active {
            ${lift({ level: 2 })}
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._tabColor(style)}
        ${this._hoverColor(style)}
        ${this._activeColor(style)}
        ${this._separatorLineColor(style)}
        ${this._separatorLineWidth(style)}
        `.trim();
        return css;
    }
    static _tabColor(style = {}) {
        if (style.tabColor == undefined) {
            return '';
        }
        ;
        return `
        ${bgColor(style.tabColor)}
        `.trim();
    }
    static _hoverColor(style = {}) {
        if (style.hoverColor == undefined) {
            return '';
        }
        ;
        return `
        > div:hover {
            ${bgColor(style.hoverColor)}
        }`.trim();
    }
    static _activeColor(style = {}) {
        if (style.activeColor == undefined) {
            return '';
        }
        ;
        return `
        > div.active {
            ${bgColor(style.activeColor)}
        }`.trim();
    }
    static _separatorLineColor(style = {}) {
        if (style.separatorLineColor == undefined) {
            return '';
        }
        ;
        return `
        border-color: ${style.separatorLineColor};
        > div:not(:last-of-type) {
            border-right-color: ${style.separatorLineColor};
        }`.trim();
    }
    static _separatorLineWidth(style = {}) {
        if (style.separatorLineWidth == undefined) {
            return '';
        }
        ;
        return `
        border-width: ${style.separatorLineWidth};
        > div:not(:last-of-type) {
            border-right-width: ${style.separatorLineWidth};
        }`.trim();
    }
}
TabStyle.default = {
    tabColor: '#ccc',
    hoverColor: '#ddd',
    activeColor: 'blue',
    separatorLineColor: 'black',
    separatorLineWidth: '1px',
};
