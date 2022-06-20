import { StyleClass } from "../ui";
import { bgColor } from "../../style";
const Color = require('color');
export class TableStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        const css = `
        display: block;
        overflow: auto;
        border: 1px solid;
        border-collapse: separate;
        border-spacing: 0;

        thead {
            font-weight: bold;
        }
        th, td {
            padding: 0.5rem;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._theadBgColor(style)}
        ${this._activeColor(style)}
        ${this._horizontalLine(style)}
        ${this._verticalLine(style)}
        `.trim();
        return css;
    }
    static _theadBgColor(style = {}) {
        if (style.theadBgColor == undefined) {
            return '';
        }
        ;
        return `
        thead {
            ${bgColor(style.theadBgColor)}
        }`.trim();
    }
    static _activeColor(style = {}) {
        if (style.activeColor == undefined) {
            return '';
        }
        ;
        return `
        tbody td:hover {
            ${bgColor(style.activeColor)}
            &::selection {
                ${bgColor(Color(style.activeColor).rotate(180))}
            }
        }
        `.trim();
    }
    static _horizontalLine(style = {}) {
        if (style.horizontalLine == undefined) {
            return '';
        }
        ;
        let horizontalLineCSS = null;
        if (style.horizontalLine) {
            horizontalLineCSS = `
            td, th {
                border-bottom: 1px solid;
            }
            thead {
                td, th {
                    border-bottom: 3px double;
                }
            }`.trim();
        }
        else {
            horizontalLineCSS = `
            td, th {
                border-bottom: 0;
            }
            thead {
                td, th {
                    border-bottom: 0;
                }
            }`.trim();
        }
        return horizontalLineCSS;
    }
    static _verticalLine(style = {}) {
        if (style.verticalLine == undefined) {
            return;
        }
        ;
        let verticalLineCSS = null;
        if (style.verticalLine) {
            verticalLineCSS = `
            td:not(:first-child), th:not(:first-child) {
                border-left: 1px solid;
            }`.trim();
        }
        else {
            verticalLineCSS = `
            td:not(:first-child), th:not(:first-child) {
                border-left: 0;
            }`.trim();
        }
        return verticalLineCSS;
    }
}
TableStyle.default = {
    theadBgColor: '#ccc',
    activeColor: 'blue',
    horizontalLine: true,
    verticalLine: true,
};
