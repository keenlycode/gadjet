import { css, cx, injectGlobal } from "@emotion/css";
export const define = (tagName, Class = StyledElement) => {
    // Order of this function belows are very crucial.
    // Class state must be defined before `customElements.define`
    Class.tagName = tagName;
    Class.onDefine(tagName);
    Class.initStyle();
};
export class StyleClass {
    static css(style = {}) { return ''; }
    ;
    static style(style = {}) { return ''; }
    ;
}
export class StyledElement extends HTMLElement {
    constructor() {
        super();
        this._class = this.constructor;
    }
    static onDefine(tagName) {
        // To extends this function, sub-elements must be defined before call
        // this function as `super.onDefine(tagName);`
        customElements.define(tagName, this);
    }
    ;
    static initStyle(style) {
        injectGlobal `
        ${this.tagName} {
            ${this.Style.css(style)}
        }`;
    }
    ;
    static tagStyle(style) {
        if (typeof style == "string") {
            injectGlobal `
            ${this.tagName} {
                ${style}
            }`;
            return;
        }
        injectGlobal `
        ${this.tagName} {
            ${this.Style.style(style)}
        }`;
    }
    static classStyle(class_, style) {
        if (typeof style == "string") {
            injectGlobal `
            ${this.tagName}.${class_} {
                ${style}
            }`;
            return;
        }
        injectGlobal `
        ${this.tagName}.${class_} {
            ${this.Style.style(style)}
        }`;
    }
    addStyle(style) {
        let className;
        if (typeof style == 'string') {
            className = css `${style}`;
        }
        else if (style instanceof Object) {
            className = css `${this._class.Style.style(style)}`;
        }
        ;
        className = cx(...this.classList, className);
        this.className = className;
    }
}
StyledElement.Style = StyleClass;
