import { keyframes } from "@emotion/css";
import { StyleClass } from "../../adapter";

export interface ProgressCircleStyleParam {
    radius?: number;
    trackWidth?: number;
    trackColor?: string;
    progressColor?: string;
}

export class ProgressCircleStyle extends StyleClass {
    static default: ProgressCircleStyleParam = {
        radius: 75,
        trackWidth: 25,
        progressColor: 'blue',
        trackColor: '#ccc'
    }

    static css(style: ProgressCircleStyleParam = {}): string {
        style = {...this.default, ...style};

        const rotateAnimation = keyframes`
            0% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(360deg);
            }
        `;

        const css = `
        display: flex;
        overflow: hidden;
        &.loop svg {
            animation: 2s linear infinite ${rotateAnimation};
        }
        ${this.style(style)}
        `.trim();

        return css;
    }

    static style(style: ProgressCircleStyleParam = {}): string {
        const css = `
        ${this._radius(style)}
        ${this._trackWidth(style)}
        ${this._progressColor(style)}
        ${this._trackColor(style)}
        `.trim();

        return css;
    }

    static _progressColor(style: ProgressCircleStyleParam = {}): string {
        if (style.progressColor == undefined) { return '' };
        return `
        &.loop circle[el="circle2"] {
            stroke: ${style.progressColor};
        }
        &.value circle[el="circle2"] {
            stroke: ${style.progressColor};
        }
        `.trim();
    }

    static _trackColor(style: ProgressCircleStyleParam = {}): string {
        if (style.trackColor == undefined) { return '' };
        return `
        circle[el="circle1"] {
            stroke: ${style.trackColor};
        }
        `.trim();
    }

    static _trackWidth(style: ProgressCircleStyleParam = {}): string {
        if (style.trackWidth == undefined) { return '' };
        return `
        circle[el="circle1"] {
            stroke-width: ${style.trackWidth};
        }
        &.loop circle[el="circle2"] {
            stroke-width: ${style.trackWidth};
        }
        &.value circle[el="circle2"] {
            stroke-width: ${style.trackWidth};
        }
        `.trim();
    }

    static _radius(style: ProgressCircleStyleParam = {}): string {
        if (style.radius == undefined) { return '' };
        
        const circumference = Math.floor(2 * Math.PI * style.radius);
        const loopAnimation = keyframes`
            0%, 25% {
                stroke-dashoffset: ${Math.floor(circumference * 0.97)};
                transform: rotate(0);
            }
            
            50%, 75% {
                stroke-dashoffset: ${Math.floor(circumference * 0.25)};
                transform: rotate(45deg);
            }
            
            100% {
                stroke-dashoffset: ${Math.floor(circumference * 0.97)};
                transform: rotate(360deg);
            }
        `;

        const css = `
        &.loop circle[el="circle2"] {
            stroke-dasharray: ${circumference};
            stroke-linecap: round;
            transition: unset;
            transform: none;
            transform-origin: 50% 50%;
            animation: 1.5s ease-in-out infinite both ${loopAnimation};
        }

        &.value circle[el="circle2"] {
            stroke-linecap: unset;
            stroke-dasharray: ${circumference} ${circumference};
            transition: stroke-dashoffset 0.25s ease-in-out;
            // axis compensation
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
            animation: unset;
        }`.trim();

        return css;
    }
}