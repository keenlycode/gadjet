import { StyleClass } from "../ui";
export class ButtonGroupStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        let css = `
        display: inline-flex;
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        if (style.borderRadius == undefined) {
            return '';
        }
        ;
        let css = `
        > * {
            border-radius: 0;
            &:first-of-type {
                border-radius: ${style.borderRadius} 0 0 ${style.borderRadius};
            }
            &:last-of-type {
                border-radius: 0 ${style.borderRadius} ${style.borderRadius} 0;
            }
        }
        `.trim();
        return css;
    }
}
ButtonGroupStyle.default = {
    borderRadius: '4px'
};
