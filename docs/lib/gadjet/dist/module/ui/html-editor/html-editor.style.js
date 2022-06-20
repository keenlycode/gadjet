import { StyleClass } from "../ui";
export class HeadingMenuStyle extends StyleClass {
}
HeadingMenuStyle.default = {
    buttonColor: '#444',
    activeColor: 'blue',
};
export class HTMLEditorStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
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
}
HTMLEditorStyle.default = {
    menuColor: '#444',
    activeColor: 'blue'
};
