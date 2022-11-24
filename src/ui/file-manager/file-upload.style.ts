import { StyleClass } from "../../adapter";
import { bgColor } from "../../style";
import { ProgressBarStyle } from "../progress/progress-bar.style";

export interface FileUploadStyleParam {
    buttonColor?: string;
    deleteButtonColor?: string;
    progressColor?: string;
    completedColor?: string;
    errorColor?: string;
    
}


export class FileUploadStyle extends StyleClass {
    static readonly default: FileUploadStyleParam = {
        buttonColor: 'blue',
        deleteButtonColor: 'red',
        progressColor: 'blue',
        completedColor: 'green',
        errorColor: 'red'
    }

    static css(style: FileUploadStyleParam = {}) {
        style = { ...this.default, ...style };
        const css = `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 33.33%;
        height: 100%;
        padding: 1%;
        box-sizing: border-box;
        position: relative;
        div[el="file"] {
            position: relative;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .button {
            all: unset;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 10;
            width: 2em;
            height: 2em;
            cursor: pointer;
        }

        div[el="delete"] {
            top: 0;
            right: 0;
            svg {
                font-size: 1.5em;
            }
        }

        div[el="upload"] {
            bottom: 0;
            right: 0;
            svg {
                font-size: 1.2em;
            }
        }
        ${this._buttonColor(style)}
        ${this._deleteButtonColor(style)}
        ${this._progressColor(style)}
        ${this._completedColor(style)}
        ${this._errorColor(style)}

        `.trim();

        return css;
    }

    static style(style: FileUploadStyleParam): string {
        const css = `
        ${this._buttonColor(style)}
        ${this._deleteButtonColor(style)}
        ${this._progressColor(style)}
        ${this._completedColor(style)}
        ${this._errorColor(style)}
        `.trim();

        return css;
    }

    static _buttonColor(style: FileUploadStyleParam): string {
        if (style.buttonColor == undefined) { return '' };
        const css = `
        div[el="upload"]:hover {
            ${bgColor(style.buttonColor)}
        }
        `.trim();

        return css;
    }

    static _deleteButtonColor(style: FileUploadStyleParam): string {
        if (style.deleteButtonColor == undefined) { return '' };
        const css = `
        div[el="delete"]:hover {
            ${bgColor(style.deleteButtonColor)}
        }
        `.trim();
        return css;
    }

    static _progressColor(style: FileUploadStyleParam): string {
        if (style.progressColor == undefined) { return '' };
        const css = `
        .ProgressBar {
            ${ProgressBarStyle.style({ progressColor: style.progressColor })}
        }
        `.trim();
    }

    static _completedColor(style: FileUploadStyleParam): string {
        if (style.completedColor == undefined) { return '' };
        const css = `
        .ProgressBar.completed {
            ${ProgressBarStyle.style({ progressColor: style.completedColor })}
        }
        `.trim();
        return css;
    }
    static _errorColor(style: FileUploadStyleParam): string {
        if (style.errorColor == undefined) { return '' };
        const css = `
        .ProgressBar.error {
            ${ProgressBarStyle.style({ progressColor: style.errorColor })}
        }
        `.trim();
        return css;
    }
}