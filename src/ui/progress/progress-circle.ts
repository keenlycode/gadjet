import { render, svg } from "uhtml";
import { StyledElement } from "../ui";
import {
    ProgressCircleStyle,
    ProgressCircleStyleParam
} from './progress-circle.style';


interface ProgressCircleChildElement {
    circle1: SVGCircleElement;
    circle2: SVGCircleElement;
}

export class ProgressCircle extends StyledElement {
    static Style = ProgressCircleStyle;

    static tagStyle(style?: ProgressCircleStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: ProgressCircleStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: ProgressCircleStyleParam): void {
        super.addStyle(style);
    }

    static radius: number;
    static trackWidth: number;

    max: number = 100;

    _radius: number;
    get radius() {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
        this.addStyle({radius: value});
        this.render();
    }

    _trackWidth: number;
    get trackWidth() {
        return this._trackWidth;
    }
    set trackWidth(value) {
        this._trackWidth = value;
        this.addStyle({trackWidth: value});
        this.render();
    }

    _value: number;
    set value(value: string | number) {
        if (typeof value != "number") {
            value = parseFloat(value);
        }
        this._value = value;
        if (isNaN(value)) {
            this.toLoop();
            return;
        }
        this.setProgress(value/this.max);
    }
    get value() {
        return this._value;
    }

    el: ProgressCircleChildElement = {
        circle1: null,
        circle2: null
    };

    constructor() {
        super();
        this._radius = this._class.Style.default.radius;
        this._trackWidth = this._class.Style.default.trackWidth;
        this.render();
    }

    render() {
        let boxSize = 2 * (this.radius + this.trackWidth);
        let cx = this.radius + this.trackWidth;
        let cy = cx;
        render(this, svg`
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
    
    setProgress(ratio: number) {
        this.classList.remove('loop');
        this.classList.add('value');
        const circumference = 2 * Math.PI * this.radius;
        const offset = circumference - (ratio * circumference);
        this.el.circle2.style.strokeDashoffset = offset.toString();
    }
}