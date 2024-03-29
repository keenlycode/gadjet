import { keyframes } from '@emotion/css';
import { StyleClass } from "@nitipit/adapter/src/adapter";


export interface ProgressBarStyleParam {
    progressColor?: string;
    trackColor?: string;
    thickness?: string;
    borderRadius?: string;
}

export class ProgressBarStyle extends StyleClass {
    static readonly default: ProgressBarStyleParam = {
        progressColor: 'blue',
        trackColor: '#ccc',
        thickness: '5px',
        borderRadius: '5px'
    }

    static css(style: ProgressBarStyleParam = {}): string {
        style = {...this.default, ...style};

        const loopAnimation = keyframes`
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

    static style(style: ProgressBarStyleParam = {}): string {
        let css = `
        ${this._progressColor(style)}
        ${this._trackColor(style)}
        ${this._thickness(style)}
        ${this._borderRadius(style)}
        `.trim();

        return css;
    }

    static _progressColor(style: ProgressBarStyleParam = {}): string {
        if (style.progressColor == undefined) { return '' };
        return `
        div[el="progress"] {
            background-color: ${style.progressColor};
        }
        `.trim();
    }

    static _trackColor(style: ProgressBarStyleParam = {}): string {
        if (style.trackColor == undefined) { return '' };
        return `
        background-color: ${style.trackColor};
        `.trim();
    }

    static _thickness(style: ProgressBarStyleParam = {}): string {
        if (style.thickness == undefined) { return '' };
        return `
        div[el="progress"] {
            height: ${style.thickness};
        }
        `.trim();
    }

    static _borderRadius(style: ProgressBarStyleParam = {}): string {
        if (style.borderRadius == undefined) { return '' };
        return `
        border-radius: ${style.borderRadius};
        div[el="progress"] {
            border-radius: ${style.borderRadius};
        }
        `.trim();
    }
}