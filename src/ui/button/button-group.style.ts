import { StyleClass } from "@nitipit/adapter/src/adapter";


export interface ButtonGroupStyleParam {
    borderRadius?: string;
}

export class ButtonGroupStyle extends StyleClass {
    static readonly default: ButtonGroupStyleParam = {
        borderRadius: '4px'
    }

    static css(style: ButtonGroupStyleParam = {}): string {
        style = { ...this.default, ...style };

        let css = `
        display: inline-flex;
        ${this.style(style)}
        `.trim()

        return css;
    }

    static style(style: ButtonGroupStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
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
        `.trim()

        return css;
    }
}