import { render, svg } from "uhtml";
import { StyledElement } from "../ui";
import { ProgressCircleStyle } from './progress-circle.style';
export class ProgressCircle extends StyledElement {
    constructor() {
        super();
        this.max = 100;
        this.el = {
            circle1: null,
            circle2: null
        };
        this._radius = this._class.Style.default.radius;
        this._trackWidth = this._class.Style.default.trackWidth;
        this.render();
    }
    static tagStyle(style) {
        super.tagStyle(style);
    }
    static classStyle(class_, style) {
        super.classStyle(class_, style);
    }
    addStyle(style) {
        super.addStyle(style);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this.addStyle({ radius: value });
        this.render();
    }
    get trackWidth() {
        return this._trackWidth;
    }
    set trackWidth(value) {
        this._trackWidth = value;
        this.addStyle({ trackWidth: value });
        this.render();
    }
    set value(value) {
        if (typeof value != "number") {
            value = parseFloat(value);
        }
        this._value = value;
        if (isNaN(value)) {
            this.toLoop();
            return;
        }
        this.setProgress(value / this.max);
    }
    get value() {
        return this._value;
    }
    render() {
        let boxSize = 2 * (this.radius + this.trackWidth);
        let cx = this.radius + this.trackWidth;
        let cy = cx;
        render(this, svg `
        <svg viewBox=${`0 0 ${boxSize} ${boxSize}`}>
            <g>
                <circle el="circle1"
                    fill="transparent"
                    r="${this.radius}"
                    cx=${cx}
                    cy=${cy} />
                <circle el="circle2"
                    fill="transparent"
                    r="${this.radius}"
                    cx=${cx}
                    cy=${cy} />
            </g>
        </svg>
        `);
        this.el.circle1 = this.querySelector('circle[el="circle1"]');
        this.el.circle2 = this.querySelector('circle[el="circle2"]');
        this.max = parseFloat(this.getAttribute('max')) || this.max;
        this.value = parseFloat(this.getAttribute('value'));
    }
    toLoop() {
        this.classList.remove('value');
        this.classList.add('loop');
    }
    setProgress(ratio) {
        this.classList.remove('loop');
        this.classList.add('value');
        const circumference = 2 * Math.PI * this.radius;
        const offset = circumference - (ratio * circumference);
        this.el.circle2.style.strokeDashoffset = offset.toString();
    }
}
ProgressCircle.Style = ProgressCircleStyle;
