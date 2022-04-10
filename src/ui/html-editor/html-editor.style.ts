import { StyleClass } from "../ui";

export interface HeadingMenuStyleParam {
    buttonColor?: string;
    activeColor?: string;
}

export class HeadingMenuStyle extends StyleClass {
    static readonly default: HeadingMenuStyleParam = {
        buttonColor: '#444',
        activeColor: 'blue',
    }
}

export interface HTMLEditorStyleParam {
    menuColor?: string;
    activeColor?: string;
}

export class HTMLEditorStyle extends StyleClass {
    static readonly default: HTMLEditorStyleParam = {
        menuColor: '#444',
        activeColor: 'blue'
    }

    static css(style: HTMLEditorStyleParam = {}): string {
        style = {...this.default, ...style};
        const css = `
        div[contenteditable="true"] {
            display: block;
            border: 2px solid;
            border-radius: 4px;
            padding: 0.3rem 0.5rem 0.3rem 0.5rem;
            outline: none;
        }
        `.trim();

        return css;
    }

    // No style() because it will be handle by components.
}