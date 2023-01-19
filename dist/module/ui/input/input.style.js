import { StyleClass } from "@nitipit/adapter/src/adapter";
export class InputStyle extends StyleClass {
    static css(style = {}) {
        return `
        font-size: 1em;
        border: 1px solid grey;
        border-radius: 0.2em;
        padding: 0.4em;
        `.trim();
    }
}
