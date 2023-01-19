import { StyleClass } from "@nitipit/adapter/src/adapter";
import { ButtonStyle } from '../button/button.style';
export class FileManagerStyle extends StyleClass {
    static css(style = {}) {
        let css = `
        display: flex;
        flex-wrap: wrap;
        border: 1px solid;
        border-radius: 4px;
        background-color: #eee;
        min-height: 200px;
        align-items: flex-start;

        [el="toolbar"] {
            display: flex;
            width: 100%;
            border-bottom: 1px solid;
            button {
                margin: 0.5rem;
            }
            [el="left"] {
                display: flex;
                flex-wrap: wrap;
                width: 50%;
            }
            [el="right"] {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                width: 50%;
            }
        }
        div[el="dashboard"] {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            width: 100%;
            padding: 1%;
            box-sizing: border-box;
        }
        button {
            ${ButtonStyle.css()}
        }
        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        const css = `
        ${this._buttonColor(style)}
        ${this._deleteButtonColor(style)}
        `.trim();
        return css;
    }
    static _buttonColor(style = {}) {
        if (style.buttonColor == undefined) {
            return '';
        }
        ;
        const css = `
        button {
            ${ButtonStyle.style({ color: style.buttonColor })};
        }
        `.trim();
        return css;
    }
    static _deleteButtonColor(style = {}) {
        if (style.deleteButtonColor == undefined) {
            return '';
        }
        ;
        const css = `
        button.delete {
            ${ButtonStyle.style({ color: style.deleteButtonColor })};
        }
        `.trim();
        return css;
    }
}
FileManagerStyle.default = {
    buttonColor: 'blue',
    deleteButtonColor: 'red',
    progressColor: 'blue',
    completeColor: 'green',
    errorColor: 'red'
};
