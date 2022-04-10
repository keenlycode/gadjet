import { StyleClass } from "../ui";
export class InputDateStyle extends StyleClass {
    static css(style = {}) {
        const css = `
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        position: relative;

        [el="icon"] {
            line-height: 0.8;
            font-size: 2em;
        }

        input[type="date"] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            box-sizing: border-box;
            padding: 0;
            z-index: 100;
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            cursor: pointer;
        }

        span[el="display"] {
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 0 0.5em;
            margin-left: 0.5em;
            border: 2px solid;
            border-radius: 0.2em;
            min-width: 7rem;
            height: 2em;
            line-height: 1;

        }
        `.trim();
        return css;
    }
}
