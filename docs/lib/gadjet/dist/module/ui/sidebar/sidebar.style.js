import { bgColor } from "../../style";
import { StyleClass } from "../ui";
export class SidebarStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
        position: absolute;
        top: 0;
        left: 0;
        [el="content"] {
            position: fixed;
            z-index: 101;
            height: 100%;
            min-width: 250px;
            overflow-x: hidden;
            overflow-y: auto;
            transition: transform 0.3s;
            transform: translate3d();
            transform: translateX(-100%);;
            will-change: transform;
            &.show {
                transform: translateX(0)
            }
        }
        [el="overlay"] {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            display: none;
            width: 100%;
            height: 100%;
            &.show {
                display: block;
            }
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        let css = `
        ${this._bgColor(style)}
        ${this._overlayColor(style)}
        `.trim();
        return css;
    }
    static _bgColor(style = {}) {
        if (style.bgColor == undefined) {
            return '';
        }
        ;
        return `
        [el="content"] {
            ${bgColor(style.bgColor)}
        }
        `.trim();
    }
    static _overlayColor(style = {}) {
        if (style.overlayColor == undefined) {
            return '';
        }
        ;
        return `
        [el="overlay"] {
            background-color: ${style.overlayColor};
        }
        `.trim();
    }
}
SidebarStyle.default = {
    bgColor: '#eee',
    overlayColor: 'rgba(0,0,0,0.7)'
};
