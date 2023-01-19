import { StyleClass } from "@nitipit/adapter/src/adapter";
import { InputNumberStyle, InputNumberStyleParam } from "./input-number.style";


export class InputNumberCenterStyle extends StyleClass {
    static css(style: InputNumberStyleParam = {}): string {
        const css = `
        ${InputNumberStyle.css()}
        input[type="number"] {
            border-radius: 0;
        }
        button[el="up"] {
            z-index: 1;
        }
        button[el="down"] {
            border-radius: 0.2em 0 0 0.2em;
            z-index: 1;
        }
        ${this.style(style)}
        `.trim();
        return css;
    }

    static style(style: InputNumberStyleParam = {}): string {
        const css = `
        ${InputNumberStyle.style(style)}
        `.trim();

        return css;
    }

    static _color(style: InputNumberStyleParam = {}): string {
        const css = `
        ${InputNumberStyle._color(style)}
        `.trim();

        return css;
    }
}