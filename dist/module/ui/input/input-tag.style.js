import { StyleClass } from "@nitipit/adapter/src/adapter";
import './input';
export class InputTagStyle extends StyleClass {
    static css(style) {
        const css = `
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        cursor: text;
        border: 1px solid grey;
        border-radius: 4px;
        background: white;
        min-height: 2em;
        min-width: 150px;
        padding: 0.2em;

        div[contenteditable="true"] {
            display: flex;
            align-items: center;
            outline: none;
            height: auto;
            border: 0;
            margin-left: 0.2em;
        }
        `.trim();
        return css;
    }
}
InputTagStyle.default = {
    tagColor: 'blue',
    tagBorderRadius: '4px'
};
