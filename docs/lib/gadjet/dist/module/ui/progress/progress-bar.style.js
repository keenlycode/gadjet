import { keyframes } from '@emotion/css';
import { StyleClass } from '../ui';
export class ProgressBarStyle extends StyleClass {
    static css(style = {}) {
        style = Object.assign(Object.assign({}, this.default), style);
        const loopAnimation = keyframes `
        from {
            width: 0;
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        to {
            width: 100%;
            opacity: 0;
        }
        `;
        let css = `
        width: 100%;
        &.value {
            display: flex;
            justify-content: flex-start;
            div[el="progress"] {
                will-change: width opacity;
                transition: width 0.25s ease 0s;
                animation: none;
            }
        }

        &.loop {
            display: flex;
            justify-content: center;
            div[el="progress"] {
                will-change: width, opacity;
                transition: none;
                animation: ${loopAnimation} 1.5s ease infinite;
            }
        }

        ${this.style(style)}
        `.trim();
        return css;
    }
    static style(style = {}) {
        let css = `
        ${this._progressColor(style)}
        ${this._trackColor(style)}
        ${this._thickness(style)}
        ${this._borderRadius(style)}
        `.trim();
        return css;
    }
    static _progressColor(style = {}) {
        if (style.progressColor == undefined) {
            return '';
        }
        ;
        return `
        div[el="progress"] {
            background-color: ${style.progressColor};
        }
        `.trim();
    }
    static _trackColor(style = {}) {
        if (style.trackColor == undefined) {
            return '';
        }
        ;
        return `
        background-color: ${style.trackColor};
        `.trim();
    }
    static _thickness(style = {}) {
        if (style.thickness == undefined) {
            return '';
        }
        ;
        return `
        div[el="progress"] {
            height: ${style.thickness};
        }
        `.trim();
    }
    static _borderRadius(style = {}) {
        if (style.borderRadius == undefined) {
            return '';
        }
        ;
        return `
        border-radius: ${style.borderRadius};
        div[el="progress"] {
            border-radius: ${style.borderRadius};
        }
        `.trim();
    }
}
ProgressBarStyle.default = {
    progressColor: 'blue',
    trackColor: '#ccc',
    thickness: '5px',
    borderRadius: '5px'
};
